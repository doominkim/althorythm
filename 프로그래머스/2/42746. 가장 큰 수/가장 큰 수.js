function solution(numbers) {
    numbers = numbers.map((v) => String(v)).sort((a, b) => {
        if(a+b > b+a) return -1
    });
    console.log(numbers)
    return numbers[0] === '0' ? '0' : numbers.join('')
}

