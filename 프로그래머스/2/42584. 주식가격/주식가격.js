function solution(prices) {
    var answer = [];
    
    for(let i=0; i<prices.length; i++) {
        let count = 0;
        let save = false
        for(let j=i+1; j<prices.length; j++) {
            count++;
            if(prices[j] < prices[i]) {
                answer.push(count);
                save = true
                break;
            }
            
        }
        
        if(!save) answer.push(count)
    }
    return answer;
}