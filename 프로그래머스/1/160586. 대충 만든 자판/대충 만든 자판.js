function solution(keymap, targets) {
    const answer = [];
    const hash = {}
   
    // 각 휴대폰 자판 문자별 가장 빠른 인덱스를 해시 테이블로 만든다.
    for(const key of keymap) {
        for(const [i, v] of key.split('').entries()) {
            if(!(v in hash)) {
                hash[v] = i;
            } else if(hash[v] > i) {
                hash[v] = i;
            }
        }
    }
    
    loop: for(const target of targets) {
        let sum = 0;
        for(const item of target) {
            // 특정 문자열을 찾을 수 없으면 바로 retrun
            if(!(item in hash)) {               
                answer.push(-1)
                continue loop;
            } 
            
            sum += hash[item] + 1
        }
        answer.push(sum)
    }
    
    return answer;
}