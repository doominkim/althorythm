function solution(s) {
    var answer = [];

    let x = 0, notX = 0, firstChar = s[0];
    for(let i=0; i<s.length; i++) {
        firstChar === s[i] ? x++ : notX++;
        if(x === notX) {
            answer.push(s.slice(i-1, i+1));
            s = '*'.repeat(i+1) + s.slice(i+1, s.length)
            firstChar = s[i+1];
        }
        
        if(i === s.length - 1 && /[a-z]/.test(s)) {
            answer.push(s.replace(/\*/, ''))
        }
    }
    
    return answer.length;
}