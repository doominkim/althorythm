function solution(topping) {
    let answer = 0; 
    const cakeA = topping.reduce((cake, v, i) => {
        cake[v] ? cake[v] += 1 : cake[v] = 1;
        return cake;
    }, {})
    const cakeB = {};
    let cakeALength = Object.keys(cakeA).length
    let cakeBLength = 0;
    
    for(let i=0; i<topping.length; i++) {
        if(cakeB[topping[i]])  {
            cakeB[topping[i]] += 1 

        }else { 
            cakeB[topping[i]] = 1;
            cakeBLength++
            }
        
        if(topping[i] in cakeA) cakeA[topping[i]]--;
        if(!cakeA[topping[i]]) {
            delete cakeA[topping[i]]
            cakeALength--
        }

        if(cakeALength === cakeBLength) answer++;
    }
    
    return answer;
}