function diStringMatch(s: string): number[] {
    const n = s.length
    let start = 0;
    let end = n;
    const numbers = Array.from(Array(n + 1), (_, i) => i)
    const result = []

    for(const c of s) {
        if(c === 'I') {
            result.push(numbers[start])
            start++
        } else {
            result.push(numbers[end])
            end--
        }
    }

    return [...result, numbers[end]]
};