function solution(n, m) {    
    // 유클리드 호제법으로 다시 풀기
    const minimumFunc = (number) => {
        const list = [];
        for(let i=0; i<=number; i++) {
            if(number % i === 0) list.push(i);
        }
        return list;
    }
    const minimum = minimumFunc(n).filter((e) => minimumFunc(m).includes(e)).pop();
    
    const maximumFunc = (n, m) => {
        const list1 = [];
        const list2 = [];
        
        let cnt = 0;
        while(true) {
            cnt++;
            list1.push(n * cnt);
            list2.push(m * cnt);
            if(list1.find((item) => list2.includes(item))) break;
        }
        
        return list1[list1.length - 1] > list2[list2.length - 1] ? list2.pop() : list1.pop();
    }
    
    return [minimum, maximumFunc(n, m)];
}