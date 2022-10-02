import {loadStdlib, ask} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

//account
const startingBalance = stdlib.parseCurrency(100);
const accSam = await stdlib.newTestAccount(startingBalance);
const accMat = await stdlib.newTestAccount(startingBalance);

console.log('\n')

//contract
const ctcSam = accSam.contract(backend);
const ctcMat = accMat.contract(backend, ctcSam.getInfo());

//format and balance
const format = (num) => stdlib.formatCurrency(num, 3);
const getBalance = async (who) => format(await stdlib.balanceOf(who));
const beforeMat = await getBalance(accMat);
const beforeSam = await getBalance(accSam);

const HAND = [0, 1, 2, 3, 4, 5];
//const TOTAL = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN']
const OUTCOME = ['Sam won', 'Draw', 'Mat won'];

const Player = (Who) => ({
    ...stdlib.hasRandom,

    getHand: async () => {
        const hand = Math.floor(Math.random() * 6);
        console.log(`${Who} plays ${HAND[hand]}`);

        if(Math.random() <= 0.01){
            for(let i = 0; i < 10; i++){
                console.log(`${Who} is napping 😴💤`);
                await stdlib.wait(1);
            }
        }

        return hand;
    },

    getGuess: async (hand) => {
        const total = Math.floor(Math.random() * 6 + HAND[hand]);
        console.log(`${Who} guesses total of ${total}\n------------------------------------------`);

        if(Math.random() <= 0.01){
            for(let i = 0; i < 10; i++){
                console.log(`${Who} is napping 😴💤`);
                await stdlib.wait(1);
            }
        }

        return total;
    },

    seeCorrectAns: (answer) => {
        console.log('\n❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗\n');
        console.log(`\tThe correct answer is ${answer}`);
        console.log('\n❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗');
        console.log('\n------------------------------------------')
    },

    seeOutcome: (outcome) => {
        console.log(`🥳🥳\t${Who} saw outcome ${OUTCOME[outcome]}\t  🥳🥳\n`);
    },

    informTimeout: () => {
        console.log(`❌ ${Who} observed a time out`);
    },
})

await Promise.all([
    ctcSam.p.Sam({
        ...Player('Sam'),
        wager: stdlib.parseCurrency(10),
        deadline: 10,
    }),
    
    ctcMat.p.Mat({
        ...Player('Mat'),
        acceptWager: (amount) => {
            console.log(`💵 Mat accpets the wager of ${format(amount)} from Sam 💵\n`);
            console.log('------------------------------------------')
        },
    }),
])

const afterSam = await getBalance(accSam);
const afterMat = await getBalance(accMat);
console.log(`💸 Sam's balance went from ${beforeSam} to ${afterSam}`);
console.log(`💸 Mat's balance went from ${beforeMat} to ${afterMat}`);
console.log('\n');