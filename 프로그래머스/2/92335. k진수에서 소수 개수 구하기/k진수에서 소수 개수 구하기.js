function solution(n, k) {
    n = n.toString(k)
    n = n.match(/[1-9a-z]+/gi)
    let answer = 0;
    for(const item of n) {
        if(isPrime(Number(item))) answer += 1
    } 
    return answer;
}

function isPrime(n) {
    if(n === 0 || n === 1) {
        return false; 
    }
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}