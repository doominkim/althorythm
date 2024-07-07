function solution(n, m, section) {
    const wall = Array(n).fill().map((v, i) => section.includes(i+1) ? 0 : 1);
    let paint = 0;
    
    for(let i=0; i<wall.length - m; i++) {
        if(wall[i] === 1) continue;
        
        for(let j=i; j<i+m; j++) {
            wall[j] = 1
        }
        paint++;
    }

    const lastWallIndex = wall.length - 1
    for(let i=lastWallIndex; i>lastWallIndex - m; i--) {
        if(wall[i] === 1) continue;
        for(let j=i; j>i-m; j--) {
            wall[j] = 1
        }
        paint++;
    }
    
    return paint;
    
}