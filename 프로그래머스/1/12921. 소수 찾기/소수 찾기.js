

function solution(n) {
    const demical = Array(n).fill().map((v, i) => i < 1 ? 0 : i+1);
    
    for(let i=0; i<demical.length; i++) {
        if(demical[i] === 0) continue;
        
        for(let j=i+demical[i]; j<demical.length; j=j+demical[i]) {
            demical[j] = 0
        }
    }
    return demical.filter((v) => v !== 0).length
}
