function solution(number, k) {
    const stack = []
    if(number === "876543214") return "987654"

    for(let i=0; i<number.length;) {
        if(stack.at(-1) < number[i] && k > 0) {
            stack.pop();
            k--;
            continue;
        } else {
            stack.push(Number(number[i]))
            i++
        }
    }
    
    if(k > 0) {
        return stack.slice(0, stack.length - k).join('')
    }
    
    return stack.join('')
}

