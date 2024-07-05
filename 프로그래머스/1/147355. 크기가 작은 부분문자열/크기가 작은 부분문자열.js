function solution(t, p) {
    const list = []
    for(let i=0; i<=t.length - p.length; i++) {
        list.push(t.slice(i, i+p.length));
    }
    
    return list.filter((item) => Number(item) <= Number(p)).length;
}