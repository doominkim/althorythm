function solution(k, dungeons) {
    return recursion(dungeons, k, 0)
}

function recursion(targetDungeons, currentStamina, clearedDungeons) {
    if(currentStamina <= 0 || targetDungeons.length === 0) {
        return clearedDungeons
    }
    
    let maxCleared = clearedDungeons
    for(let i=0; i<targetDungeons.length; i++) {
        if(targetDungeons[i][0] <= currentStamina) {
            const cleared = recursion(
                      targetDungeons.filter((val, idx) => idx !== i),
                      currentStamina - targetDungeons[i][1],
                      clearedDungeons + 1
            )
            maxCleared = Math.max(maxCleared, cleared)
        }
    }
    
    
    return maxCleared
}