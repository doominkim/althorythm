function solution(n) {
    const division = Math.sqrt(n);
    return division % 1 === 0 ? (division + 1) * (division + 1) : -1
}