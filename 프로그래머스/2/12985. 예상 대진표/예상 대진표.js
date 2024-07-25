function solution(n,a,b)
{
    let contest = new Array(n).fill().map((v, i) => [a, b].includes(i+1) ? i+1 : '*')
    let round = 1;
    while(true) {
        let currentRound = [];
        for(let i=0; i<contest.length-1; i+=2) {
            if(contest[i] !== '*' && contest[i+1] !== '*') {
                return round;
            } else if(contest[i] !== '*') {
                currentRound.push(contest[i])
            } else if(contest[i+1] !== '*') {
                currentRound.push(contest[i+1])
            } else {
                currentRound.push('*')
            }
        }
        contest = currentRound;
        round++;
    }
    return round;
}
