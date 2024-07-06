function solution(food) {
    food.shift();
    const competitionFood = food.map((item) => item % 2 === 0 ? item : item - 1);
    
    let leftFood = '';
    for(const [idx, val] of competitionFood.entries()) {
        leftFood += String(idx+1).repeat(val/2);
    }
    var answer = leftFood + '0' + leftFood.split('').reverse().join('');
    return answer;
}