function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a, b) => 
                          a[n] < b[n] 
                          ? -1 
                          : a[n] > b[n] 
                          ? 1 
                          : a < b 
                          ? -1
                          : a > b
                          ? 1
                          : 0
                         )
    
    return answer;
}