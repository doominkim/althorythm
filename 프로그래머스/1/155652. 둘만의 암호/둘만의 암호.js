function solution(s, skip, index) {
    let answer = '';
    // 알파벳 배열 생성 후 SKIP 문자 제거
    let lowerCase = Array(26).fill()
                            .map((v, i) => String.fromCharCode(i+97))
                            .filter((v, i) => !skip.split('').includes(v));
    
    for(const char of s) {
        let shiftIndex = lowerCase.indexOf(char) + index >= lowerCase.length 
        ? (lowerCase.indexOf(char) + index) % lowerCase.length 
        : (lowerCase.indexOf(char) + index)
        answer += lowerCase[shiftIndex]
    }
    
    return answer
}