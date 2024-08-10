function solution(s, k) {
    let sum = 0
    let left = 0
    let right = 0
    const arr = []
    while(true) {
        if(sum < k) {
            sum += s[right]
            right++
        } else {
            if(sum === k) arr.push([left, right-1])
            sum -= s[left]
            left++
        }
        
        if(left === s.length) break;        
    }
    
    arr.sort(([a, b], [c, d]) => (b - a) - (d - c))
    return arr[0]
}