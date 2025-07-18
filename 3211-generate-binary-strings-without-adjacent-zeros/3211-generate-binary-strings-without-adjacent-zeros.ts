function validStrings(n: number): string[] {
    const digits = []
    for(let i=0; i<Math.pow(2, n); i++) {
        const digit = i.toString(2).padStart(n, '0')
        if(!digit.includes('00')) {
            digits.push(digit)
        }
    }

    return digits
};