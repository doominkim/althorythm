function solution(food) {
    const water = food.shift() - 1;
    const competitionFood = food.map((item) => item % 2 === 0 ? item : item - 1);
    let leftFood = '';
    for(const [idx, val] of competitionFood.entries()) {
        leftFood += String(idx+1).repeat(val/2);
    }
    return leftFood + water + leftFood.split('').reverse().join('');
}