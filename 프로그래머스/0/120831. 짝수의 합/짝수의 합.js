function solution(n) {
    return Array.from(Array(n), (v, i) => i+1).filter((v) => v % 2 === 0).reduce((acc, cur) => acc+cur, 0)
}