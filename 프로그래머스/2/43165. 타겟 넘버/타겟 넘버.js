function solution(numbers, target) {
    return dfs(0, target, [], numbers, 0)
}

function dfs(depth, target, operator, numbers, result = 0) {
    if(depth === numbers.length) {
        let sum = 0;
        for(let i=0; i<operator.length; i++) {
            sum += operator[i] === '+' ? numbers[i] : -numbers[i]
        }
        return sum === target ? 1 : 0
    }
    
    for(let i=0; i<2; i++) {
        result += dfs(depth + 1, target, operator.concat(i % 2 === 0 ? '+': '-'), numbers)
    }
    
    return result
}