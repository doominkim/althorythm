function solution(brown, yellow) {
    var answer = [];
    const sum = brown + yellow;
    let number = 1
    while(true) {
        if(sum % number === 0 && number >= sum / number && (number-2) * (sum / number - 2) === yellow) {
            answer.push(number)
            answer.push(sum / number)
            break;
        }
        
        if(sum < number) {
            answer.push(number)
            answer.push(1)
            break;
        }
        number++;
    }
    return answer;
}
