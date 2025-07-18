function smallestNumber(pattern: string): string {
    const availableNumbers = Array.from(Array(pattern.length+1), (_, i) => i+1);
    let stack = []
    const result = []

    for(let i=0; i<pattern.length; i++) {
        if(pattern[i] === 'I') {
            result.push(availableNumbers.shift())
            result.push(...stack.reverse())
            stack = []
        } else {
            stack.push(availableNumbers.shift())
        }

        console.log(availableNumbers, pattern[i], result, stack)
    }

    result.push(...availableNumbers, ...stack.reverse())

    return result.join('')
};