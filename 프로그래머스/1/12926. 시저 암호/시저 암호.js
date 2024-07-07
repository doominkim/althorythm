function solution(s, n) {
    var answer = '';
    const upperCase = Array(26).fill().map((v, i) => String.fromCharCode(i+65))
    const lowerCase = Array(26).fill().map((v, i) => String.fromCharCode(i+97))

    for(const char of s) {
        let lowerCaseIdx = lowerCase.indexOf(char)
        let upperCaseIdx = upperCase.indexOf(char)
        if(lowerCaseIdx > -1) {
            if(lowerCaseIdx + n > lowerCase.length - 1) {
                answer += lowerCase[(lowerCaseIdx + n) % lowerCase.length]
            } else {
                answer += lowerCase[lowerCaseIdx + n]
            }
            
        }
        
        if(upperCaseIdx > -1) {
            if(upperCaseIdx + n > upperCase.length - 1) {
                answer += upperCase[(upperCaseIdx + n) % upperCase.length]
            } else {
                answer += upperCase[upperCaseIdx + n]
            }
        }
        
        if(lowerCaseIdx === -1 && upperCaseIdx === -1){
            answer += ' '
        }
        
    }
    
    return answer;
}