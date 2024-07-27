function solution(s) {
    const regexp = new RegExp(/\{[0-9,]+\}/g)
    const tupleHash = {}
    for(const item of s.match(regexp)) {
        const arr = item.match(/[0-9,]+/)[0].split(',')
        tupleHash[arr.length] = arr
    }
    
    const answer = []
    for(let i=1; i<=Object.keys(tupleHash).length; i++ ) {
        if(i === 1) {
            answer.push(Number(tupleHash[i][0]))
        } else {
            answer.push(Number(tupleHash[i].filter((v) => !tupleHash[i-1].includes(v))[0]))
        }
    }    
    
    return answer
}