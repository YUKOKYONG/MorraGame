import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isSam = await ask.ask(
    `🤔 Are you Sam?`,
    ask.yesno
);

const who = isSam ? 'Sam' : 'Mat';
console.log(`Starting Morra Game as ${who} ✌️✋☝️`);

let account = null;
const createAccount = await ask.ask(
    `Would you like to create an account? (only possible on devnet)`,
    ask.yesno
);
if(createAccount){
    const startingBalance = stdlib.parseCurrency(100);
    account = await stdlib.newTestAccount(startingBalance);
}
else{
    const secret = await ask.ask(
        `🤔 What's your secret?`,
        (a => a)
    );
    account = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if(isSam){
    ctc = account.contract(backend);
    ctc.getInfo().then((info) => {
        console.log((`\nThe contract is deployed as = ${JSON.stringify(info)}`));
    });
}
else{
    const ctcInfo = await ask.ask(
        `\nPlease paste the contract information:`,
        JSON.parse
    );
    ctc = account.contract(backend, ctcInfo);
}

const format = (num) => stdlib.formatCurrency(num, 3);
const getBalance = async () => format(await stdlib.balanceOf(account));

const beforeGame = await getBalance();
console.log(`\n💵 Your balance is ${beforeGame}`);

const interact = {...stdlib.hasRandom};

interact.informTimeout = () => {
    console.log(`❌ There was a timeout!!!`);
    process.exit(1);
};

if(isSam){
    const amount = await ask.ask(
        `🤔 How much do you want to wager?`,
        stdlib.parseCurrency
    );
    interact.wager = amount;
    interact.deadline = {ETH: 100, ALGO: 100, CFX: 1000}[stdlib.connector];
}
else{
    interact.acceptWager = async (amount) => {
        const accepted = await ask.ask(
            `🤔 Do you accept the wager of ${format(amount)}?`,
            ask.yesno
        );
        if(!accepted){
            process.exit(0);
        }
    };
}

const HAND = [0, 1, 2, 3, 4, 5];
const HANDS = {
    0: 0, 'zero': 0, 'ZERO': 0, 'Zero': 0,
    1: 1, 'one': 1, 'ONE': 1, 'One': 1,
    2: 2, 'two': 2, 'TWO': 2, 'Two': 2,
    3: 3, 'three': 3, 'THREE': 3, 'Three': 3,
    4: 4, 'four': 4, 'FOUR': 4, 'Four': 4,
    5: 5, 'five': 5, 'FIVE': 5, 'Five': 5,
};
interact.getHand = async () => {
    const hand = await ask.ask(`\n🤔 What number will you play?`, (a) => {
        const hand = HANDS[a];
        if(hand === undefined){
            throw Error(`❌ Not a valid hand ${hand}`);
        }
        return hand;
    });
    console.log(`You played ${HAND[hand]}`);
    return hand;
};

const TOTAL = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TOTALS = {
    0: 0, 'zero': 0, 'ZERO': 0, 'Zero': 0,
    1: 1, 'one': 1, 'ONE': 1, 'One': 1,
    2: 2, 'two': 2, 'TWO': 2, 'Two': 2,
    3: 3, 'three': 3, 'THREE': 3, 'Three': 3,
    4: 4, 'four': 4, 'FOUR': 4, 'Four': 4,
    5: 5, 'five': 5, 'FIVE': 5, 'Five': 5,
    6: 6, 'six': 6, 'SIX': 6, 'Six': 6,
    7: 7, 'seven': 7, 'SEVEN': 7, 'Seven': 7,
    8: 8, 'eight': 8, 'EIGHT': 8, 'Eight': 8,
    9: 9, 'nine': 9, 'NINE': 9, 'Nine': 9,
    10: 10, 'ten': 10, 'TEN': 10, 'Ten': 10,
}
interact.getGuess = async () => {
    const total = await ask.ask(`\n🤔 What total number will you guess?`, (a) => {
        const total = TOTALS[a];
        if(total === undefined){
            throw Error(`❌ Not a valid guess ${total}`);
        }
        return total;
    });
    console.log(`You played ${TOTAL[total]}`);
    return total;
};

interact.seeCorrectAns = async (answer) => {
    console.log('\n❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗\n');
    console.log(`\tThe correct answer is ${answer}`);
    console.log('\n❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗');
    console.log('\n------------------------------------------')
};

const OUTCOME = ['Sam won', 'Draw', 'Mat won'];
interact.seeOutcome = async (outcome) => {
    console.log(`🥳 The outcome is ${OUTCOME[outcome]}`);
};

const part = isSam ? ctc.p.Sam : ctc.p.Mat;
await part(interact);

const afterGame = await getBalance();
console.log(`💸 Your balance is now ${afterGame}\n`);

ask.done();