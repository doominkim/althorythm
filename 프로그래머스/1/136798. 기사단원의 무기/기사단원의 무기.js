function solution(number, limit, power) {
    var answer = 0;
    for(let nightNumber=1; nightNumber<= number; nightNumber++) {
        let division = new Set()
        for(let i=1; i<=Math.sqrt(nightNumber); i++) {
            if(nightNumber % i === 0) {
                division.add(nightNumber / i)
                division.add(i)
            }
            
        }
        answer += (division.size > limit ? power : division.size)
    }
    return answer;
}