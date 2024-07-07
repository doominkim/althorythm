function solution(k, m, score) {
    // 1. 사과를 상자에 더 이상 담을 수 없을 때까지 반복한다.
    // 2. 사과는 최대한 높은 등급의 사과를 담는다.
    score.sort((a, b) => b-a);
    let appleBoxes = []
    for(let i=0; i<score.length; i=i+m) {
        if(score.length < i + m) break;
        appleBoxes.push(score.slice(i, i + m));
    }
    
    // 3. sort로 인해 사과상자의 맨 마지막은 항상 낮은 값이다.
    return appleBoxes.reduce((acc, cur) => acc + cur.length * cur[cur.length - 1], 0);
}