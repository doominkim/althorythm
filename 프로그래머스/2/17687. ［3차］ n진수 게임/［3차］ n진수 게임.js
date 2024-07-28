function solution(n, t, m, p) {
    var answer = '';
    let text = ''
    for(let i=0; i<t*m; i++) {
        text += i.toString(n).toUpperCase();
    }

    for(let i=0; i<text.length; i++) {
        if(i % m === p-1) {
            answer += text[i];
        }
    }
    return answer.slice(0, t);
}
