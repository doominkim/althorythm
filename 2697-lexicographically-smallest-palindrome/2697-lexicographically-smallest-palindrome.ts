function makeSmallestPalindrome(s: string): string {
    const result = Array(s.length)
    let start = 0
    let end = s.length - 1

    while(start <= end) {
        if(s[start] === s[end]) {
            result[start] = s[start]
            result[end] = s[end]
        } else {
            const c = s[start] > s[end] ? s[end] : s[start]
            result[start] = c
            result[end] = c
        }
        start++
        end--
    }

    return result.join('')
};