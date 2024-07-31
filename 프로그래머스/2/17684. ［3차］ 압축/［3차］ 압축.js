function solution(msg) {
    const answer = [];
    const dict = [];
    for(let i=65; i<91; i++) dict.push(String.fromCharCode(i))
    
    let range = msg.length
    while(range > 0) {
        const curWord = msg.slice(0, range)
        const curIdx = dict.indexOf(curWord)
        if(curIdx > -1) {
            answer.push(curIdx+1)
            
            const prevWord = msg.slice(0, range+1)
            const prevIdx = dict.indexOf(prevWord)
            if(prevIdx === -1) dict.push(prevWord);
            
            msg = msg.slice(range)
            range = msg.length;
        } else {
            range--;
        }
    }
    return answer;
}
