// TODO DP 접근법으로 다시 풀어보자.
// DP 접근법
// dp[N][K] : N개의 종류 중 K개를 선택하는 경우의 수 (K <= N)
// dp[N][K] = dp[N - 1][K] + dp[N - 1][K - 1] * cnt[N]

function solution(clothes) {
    let clotheTable = {}
    for(const clothe of clothes) {
        if(!Object.keys(clotheTable).includes(clothe[1])){
            clotheTable[clothe[1]] = new Set()
        } 
        clotheTable[clothe[1]].add(clothe[0])
    }
    
    
    // 수학적 접근법 
    let gop = 1
    for(const key in clotheTable) {
        gop *= clotheTable[key].size + 1
    }
    
    return gop - 1
}