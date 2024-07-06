function solution(a, b, n) {
    var answer = 0;
    while(n >= a) {
        const newCola = Math.floor(n / a) * b;
        const remainCola = n % a;
        n = newCola + remainCola;
        answer += newCola;
    }
    return answer;
}