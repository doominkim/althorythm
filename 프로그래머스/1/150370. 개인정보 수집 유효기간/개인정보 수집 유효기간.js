function solution(today, terms, privacies) {
    today = new Date(today);
    let answer = [];
    let termHash = terms.reduce((acc, cur, idx) => {
        const v = cur.split(' ')
        return {...acc, [v[0]]: Number(v[1])};
    }, {});
    
    privacies.forEach((val, idx) => {
        const privacy = val.split(' ') 
        
        let date = new Date(privacy[0])
        date.setMonth(date.getMonth() + termHash[privacy[1]])
        console.log(new Date(privacy[0]), date, termHash[privacy[1]], today, date <= today)
        date <= today ? answer.push(idx+1) : null
    })
    
    return answer;
}