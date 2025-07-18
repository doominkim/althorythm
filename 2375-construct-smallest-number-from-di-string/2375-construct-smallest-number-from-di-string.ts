function smallestNumber(pattern: string): string {
    const stack: number[] = [];
    let result = '';
    let num = 1;
    for (let i = 0; i <= pattern.length; i++) {
        stack.push(num++);
        if (i === pattern.length || pattern[i] === 'I') {
            //if exist stack values
            while (stack.length) {
                result += stack.pop();
            }
        }
    }
    return result;
    // const availableNumbers = Array.from(Array(pattern.length+1), (_, i) => i+1);
    // let stack = []
    // const result = []

    // for(let i=0; i<pattern.length; i++) {
    //     if(pattern[i] === 'I') {
    //         result.push(availableNumbers.shift())
    //         result.push(...stack.reverse())
    //         stack = []
    //     } else {
    //         stack.push(availableNumbers.shift())
    //     }
    // }

    // result.push(...availableNumbers, ...stack.reverse())

    // return result.join('')
};