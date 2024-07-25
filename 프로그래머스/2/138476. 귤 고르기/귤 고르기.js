function solution(k, tangerine) {
    const hash = {}
    for(const item of tangerine) {
        if(!(item in hash)) hash[item] = 0
        hash[item] += 1
    }
    
    let count = 0;
    const sortedTangerine = Object.entries(hash).sort((a, b) => b[1] - a[1])
    for(const [idx, val] of sortedTangerine) {
        count++;
        k = k - val;
        if(k <= 0) break;
    }
    
    return count
}