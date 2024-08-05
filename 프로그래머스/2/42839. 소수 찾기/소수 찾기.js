function createNumbers(numbers) {
    const allNumbers = new Set()
    for(let i=1; i<=numbers.length; i++) {
        dfs(numbers, i, '')    
    }
    function dfs(numbers, n, result) {
        if(result.length === n && result >= 2) {
            allNumbers.add(Number(result))
            return
        }
        
        for(let i=0; i<numbers.length; i++) {
            dfs(numbers.slice(0, i).concat(numbers.slice(i+1, numbers.length)), n, numbers[i].concat(result))
        }
    }
    return allNumbers
}

function createDecimals(numbers) {
    numbers = Number(numbers.split('').sort().reverse().join(''));
    const decimals = [];
    const arr = []
    
    // 제곱근을 먼저 구한다.
    for(let i=2; i<= Math.sqrt(numbers); i++){
        let isDecimals = true;
        for(let j=2; j<i; j++) if(i % j === 0) isDecimals = false;
        if(isDecimals) decimals.push(i)
    }
    
    loop: for(let i=2; i<=numbers; i++) {
        for(let j=0; j<decimals.length; j++) {
            if(i === decimals[j]) arr.push(i);
            if(i % decimals[j] === 0) continue loop;
        }
        arr.push(i)
    }
    return arr
}

function solution(numbers) {
    const casesOfPaper = createNumbers(numbers)
    const decimals = createDecimals(numbers)
    // 에스토스테네스의 체를 이용한다.

    const answer = [];
    for(const paper of casesOfPaper) {
        if(decimals.includes(paper)) answer.push(paper)
    }
    
    return answer.length;
}


