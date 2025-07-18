function replaceDigits(s: string): string {
    const shift = (c: string, x: number): string => {
        return String.fromCharCode(c.charCodeAt(0) + x)
    }  

    const result = []
    for(let i=0; i<s.length; i++) {
        if(/[0-9]/.test(s[i])) {
            result.push(shift(s[i-1], Number(s[i])))
        } else {
            result.push(s[i])
        }
    }

    return result.join('')
};