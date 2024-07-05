function solution(arr) {   
    const combination = (items, idx, k, list, result) => {
        if(items.length === k) {
            result.push(items);
            return;
        }
        
        for(let i=idx; i<list.length; i++) {
            combination([...items, list[i]], i + 1, k, list, result);
        }
    }

    let answer = [];
    combination([], 0, 3, arr, answer)
    return answer.filter((item) => item.reduce((acc, cur) => acc + cur, 0) === 0).length
}