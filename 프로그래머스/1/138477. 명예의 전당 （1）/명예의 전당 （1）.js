function solution(k, score) {
    const answer = [];
    const hallOfFame = [];
    let startIndex = 0;
    
    while(startIndex !== score.length) {
        hallOfFame.push(score[startIndex])
        hallOfFame.sort((a, b) => b-a)
        if(hallOfFame.length > k)  hallOfFame.pop()
        answer.push(hallOfFame[hallOfFame.length - 1])
        startIndex++
    }
    return answer;
}