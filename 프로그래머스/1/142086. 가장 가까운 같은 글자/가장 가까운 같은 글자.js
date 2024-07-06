function solution(s) {
    var answer = new Array(s.length);
    const hash = {}
    for(let i=0; i<s.length; i++) {
        if(!hash.hasOwnProperty(s[i])) hash[s[i]] = []
        hash[s[i]].push(i)
    }
    
    console.log(hash)
    for(const char of Object.values(hash)) {
        for(const [idx, val] of char.entries()) {
            if(idx === 0) {
                answer[val] = -1
            } else {
                answer[val] = val - char[idx - 1]
            }
        }
    }
    return answer;
}