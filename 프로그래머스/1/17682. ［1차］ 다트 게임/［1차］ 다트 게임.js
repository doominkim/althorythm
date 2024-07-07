function solution(dartResult) {
    const pattern = new RegExp(/[0-9][0-9]?(S|D|T)(\*|\#)?/);
    const scores = [];
    const stages = [];
    const round = 3;
    for(let i=0; i<round; i++) {
        const result = dartResult.match(pattern)[0];
        dartResult = dartResult.replace(result, '');
        stages.push(result);
    }
    
    for(let i=0; i<stages.length; i++) {
        let score = stages[i].match(/[0-9][0-9]?/)[0];
        const section = stages[i].match(/(S|D|T)/)[0];
        const effect = stages[i].match(/(\*|\#)/);
        const gop = section === 'S' ? 1 : section === 'D' ? 2 : 3
        
        let amount = 1;
        for(let j=0; j<gop; j++) {
            amount *= score;
        }
        
        if(effect !== null){
            if(effect[0] === '*') {
                if(i > 0) scores[i-1] *= 2;
                amount *= 2;
            } else {
                amount *= -1;
            }
            

        }
        scores.push(amount);
    }
    
    console.log(scores)
    return scores.reduce((acc, cur) => acc + cur, 0);
}