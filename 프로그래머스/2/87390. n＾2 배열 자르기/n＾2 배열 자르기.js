function solution(n, left, right) {
    answer = [];
    for(let i=left; i<=right; i++) {
        const max = Math.max(Math.floor(i / n), i % n);
        answer.push(max+1);
    }
    return answer;
}
