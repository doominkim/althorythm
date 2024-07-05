function solution(t, p) {
    const list = []
    for(let i=0; i<=t.length - p.length; i++) {
        let temp = '';
        for(let j=i; j<i + p.length; j++) {
            temp += t[j];
        }
        list.push(temp);
    }
    
    return list.filter((item) => Number(item) <= Number(p)).length;
}