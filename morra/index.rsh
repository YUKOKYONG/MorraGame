'reach 0.1'

const [isHand, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);
const [isOutcome, S_WINS, DRAW, M_WINS] = makeEnum(3);
const [isGuess, guessZERO, guessONE, guessTWO, guessTHREE, guessFOUR, guessFIVE, guessSIX, guessSEVEN, guessEIGHT, guessNINE, guessTEN] = makeEnum(11);

const checkAns = (handSam, handMat, guessSam, guessMat) => {
    const correctAns = handSam + handMat;

    if(guessSam == guessMat){
        const outcome = DRAW;
        return outcome;
    }
    else if(guessSam == correctAns){
        const outcome = S_WINS;
        return outcome;
    }
    else if(guessMat == correctAns){
        const outcome = M_WINS;
        return outcome;
    }
    else{
        const outcome = DRAW;
        return outcome;
    }
}

assert(checkAns(ZERO, ONE, guessZERO, guessONE) == M_WINS);
assert(checkAns(ONE, ZERO, guessONE, guessZERO) == S_WINS);
assert(checkAns(ZERO, TWO, guessZERO, guessONE) == DRAW);
assert(checkAns(THREE, THREE, guessTHREE, guessTHREE) == DRAW);

forall(UInt, handSam => 
    forall(UInt, handMat => 
        forall(UInt, guessSam => 
            forall(UInt, guessMat =>
                assert(isOutcome(checkAns(handSam, handMat, guessSam, guessMat)))))))

forall(UInt, (handSam) => 
    forall(UInt, (handMat) => 
        forall(UInt, (guess) =>
            assert(checkAns(handSam, handMat, guess, guess) == DRAW))))

const Player = {
    ...hasRandom,
    getHand: Fun([], UInt),
    getGuess: Fun([], UInt),
    seeCorrectAns: Fun([UInt], Null),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
    const Sam = Participant('Sam', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    })

    const Mat = Participant('Mat', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    })
    init()

    const informTimeout = () => {
        each([Sam, Mat], () => {
            interact.informTimeout();
        })
    }

    Sam.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    })
    Sam.publish(wager, deadline)
        .pay(wager)
    commit()

    Mat.only(() => {
        interact.acceptWager(wager);
    })
    Mat.pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Sam, informTimeout))

    var outcome = DRAW;
    invariant((balance() == 2 * wager) && isOutcome(outcome))
    while(outcome == DRAW){
        commit()

        Sam.only(() => {
            const _handSam = interact.getHand();
            const [_commitHandSam, _saltHandSam] = makeCommitment(interact, _handSam);
            const commitHandSam = declassify(_commitHandSam);
    
            const _guessSam = interact.getGuess();
            const [_commitGuessSam, _saltGuessSam] = makeCommitment(interact, _guessSam);
            const commitGuessSam = declassify(_commitGuessSam);
        })
        Sam.publish(commitHandSam)
            .timeout(relativeTime(deadline), () => closeTo(Mat, informTimeout))
        commit()
        Sam.publish(commitGuessSam)
            .timeout(relativeTime(deadline), () => closeTo(Mat, informTimeout))
        commit()
    
        unknowable(Mat, Sam(_handSam, _saltHandSam))
        unknowable(Mat, Sam(_guessSam, _saltGuessSam))
    
        Mat.only(() => {
            const handMat = declassify(interact.getHand());
            const guessMat = declassify(interact.getGuess());
        })
        Mat.publish(handMat)
            .timeout(relativeTime(deadline), () => closeTo(Sam, informTimeout))
        commit()
        Mat.publish(guessMat)
            .timeout(relativeTime(deadline), () => closeTo(Sam, informTimeout))
        commit()
    
        Sam.only(() => {
            const saltHandSam = declassify(_saltHandSam);
            const handSam = declassify(_handSam);
            const saltGuessSam = declassify(_saltGuessSam);
            const guessSam = declassify(_guessSam);
        })
        Sam.publish(saltHandSam, handSam)
            .timeout(relativeTime(deadline), () => closeTo(Mat, informTimeout))
        checkCommitment(commitHandSam, saltHandSam, handSam)
        commit()
        Sam.publish(saltGuessSam, guessSam)
            .timeout(relativeTime(deadline), () => closeTo(Mat, informTimeout))
        checkCommitment(commitGuessSam, saltGuessSam, guessSam)
        commit()

        Sam.only(() => {
            const correctAnsSam = handSam + handMat;
            interact.seeCorrectAns(correctAnsSam);
        })
        Sam.publish(correctAnsSam)
            .timeout(relativeTime(deadline), () => closeTo(Sam, informTimeout))
        commit()
        
        Mat.only(() => {
            const correctAnsMat = handSam + handMat;
            interact.seeCorrectAns(correctAnsMat);
        })
        Mat.publish(correctAnsMat)
            .timeout(relativeTime(deadline), () => closeTo(Sam, informTimeout))
            
        outcome = checkAns(handSam, handMat, guessSam, guessMat);
        continue;
    }
    
    assert(outcome == S_WINS || outcome == M_WINS)
    transfer(2 * wager).to(outcome == S_WINS ? Sam : Mat)
    commit()

    each([Sam, Mat], () => {
        interact.seeOutcome(outcome)
    })

    exit()
})