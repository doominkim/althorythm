function solution(ingredient) {
    var answer = 0;
    
    // 시간복잡도 O(n^2)으로 효율성 통과 X
    // ingredient = ingredient.join('');
    // const hamburger = new RegExp(/1231/);
    // while(hamburger.test(ingredient)) {
    //     ingredient = ingredient.replace(hamburger, '');
    //     answer++
    // }
    
    for(let i=0; i<ingredient.length - 3;) {
        let combination = ""; 
        for(let j=i; j<i+4; j++) {
            combination += ingredient[j];
        }
        
        if(combination === '1231') {
            ingredient.splice(i, 4)
            i = i-3 <= 0 ? 0 : i-3;
            answer++;
        } else {
            i++
        }
    }
    
    return answer;
}