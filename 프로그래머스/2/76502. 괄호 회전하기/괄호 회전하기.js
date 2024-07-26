function solution(s) {
    let answer = 0;
    let x = s.length;
    
    while(x > 0) {
        const stack = [];
        const arr = s.split('');
        for(const item of arr) {
            if(['(', '[', '{'].includes(item)) {
                stack.push(item)
            } 
            
            if([')', ']', '}'].includes(item)) {
                if(stack.length === 0) stack.push(-1);
                
                switch(item) {
                    case ')':
                        if(stack[stack.length-1] === '(') stack.pop();
                        break;
                    case ']':
                        if(stack[stack.length-1] === '[') stack.pop();
                        break;
                    case '}':
                        if(stack[stack.length-1] === '{') stack.pop();
                        break;
                }
            }
        }
        if(stack.length === 0) answer++;
        s = s.slice(-1) + s.slice(0, s.length - 1)
        x--;
    }
    return answer;
}