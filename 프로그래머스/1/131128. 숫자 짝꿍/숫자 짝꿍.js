function solution(X, Y) {
    const hashX = {};
    const hashY = {};
    
    for(let i=0; i<X.length; i++) {
        if(!(X[i] in hashX)) hashX[X[i]] = 0;
        hashX[X[i]]++
    }
    
    for(let i=0; i<Y.length; i++) {
        if(!(Y[i] in hashY)) hashY[Y[i]] = 0;
        hashY[Y[i]]++
    }
    
    let answer = "";
    for(const [i, v] of Object.entries(hashX).sort((a, b) => b[0] - a[0])) {
        if(hashY[i] !== undefined) answer += i.repeat(hashX[i] < hashY[i] ? hashX[i] : hashY[i])
    }
    
    return answer === "" ? "-1" : !answer.match(/[1-9]/) ? "0" : answer;
}