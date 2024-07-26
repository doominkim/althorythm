function solution(elements) {
    let maxLength = elements.length;
    elements = [...elements, ...elements];
    elements.pop();
    
    const sumArr = new Set();
    let pointer = 0;
    while(maxLength > 0) {
        const sum = elements.slice(pointer, pointer+maxLength).reduce((acc, cur) => acc+cur, 0);
        sumArr.add(sum);
        pointer++;
        if(pointer > elements.length - 1) {
            maxLength--;
            elements.pop();
            pointer = 0;
        }
    }
    return sumArr.size;
}