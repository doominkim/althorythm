function solution(land) {
    const dp = Array.from(Array(land.length), () => Array(4).fill(0))
    
    dp[0] = land[0]
    for(let i=1; i<land.length; i++) {
        for(let j=0;j<4;j++) {
            for(let k=0;k<4;k++) {
                if(j === k) continue;
                dp[i][j] = Math.max(dp[i][j], land[i][j] + dp[i-1][k])
            }
            
        }   
    }
    
    return dp[dp.length - 1].sort((a, b) => b-a)[0]
}

