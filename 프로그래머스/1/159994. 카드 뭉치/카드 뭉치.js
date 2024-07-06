function solution(cards1, cards2, goal) {
    
    while(true) {
        if(cards1.length > 0 && cards1[0] === goal[0]) {
            cards1.shift();
            goal.shift();
            continue;
        } 
        
        if(cards2.length > 0 && cards2[0] === goal[0]) {
            cards2.shift();
            goal.shift();
            continue;
        }
        break;
    }
    
    return goal.length === 0 ? "Yes" : "No"
}