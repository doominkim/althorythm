function verifyInclude(hashA, hashB) {
    for(const [key, val] of Object.entries(hashB)) {
        if(hashA[key] === undefined || hashA[key] < val) return false
    }
    return true
}

function solution(want, number, discount) {
    var answer = 0;
    const wantHash = {}    
    for(let i=0; i<want.length; i++) wantHash[want[i]] = number[i];
    const numberOfWant = number.reduce((acc, cur) => acc+cur, 0);
    
    for(let i=0; i<=discount.length - numberOfWant; i++) {
        let discountHash = {}
        for(const item of discount.slice(i, numberOfWant + i)) {
            if(!(item in discountHash)) discountHash[item] = 0;
            discountHash[item]++
        }
        answer += verifyInclude(discountHash, wantHash) ? 1 : 0
    }
    return answer;
}