function solution(priorities, location) {
    priorities = priorities.map((i, v) => [i, v])
    const answer = [];
    while(priorities.length > 0) {
        const element = priorities.shift();
        if(priorities.some((v) => v[0] > element[0])) {
            priorities.push(element)
        } else {
            answer.push(element)
            if(element[1] === location) break;
        }
    }
    return answer.length;
}
