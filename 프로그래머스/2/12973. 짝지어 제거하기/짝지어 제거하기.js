function solution(s) {
    const temp = [];
    const stack = s.split('');
    
    while(stack.length > 0) {
        if(temp.length === 0) {
            temp.push(stack.pop());
        } else if(temp[temp.length - 1] === stack[stack.length - 1]) {
                temp.pop();
                stack.pop();
        } else {
            temp.push(stack.pop());
        }
    }
    
    return temp.length > 0 ? 0 : 1
}