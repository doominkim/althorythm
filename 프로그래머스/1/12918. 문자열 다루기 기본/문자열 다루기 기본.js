function solution(s) {
    return [4, 6].includes(s.length) && !isNaN(Number(s)) && !s.includes("e") ? true : false
}