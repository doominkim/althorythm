function solution(babbling) {
    const speak = ['aya', 'ye', 'woo', 'ma'];
    var answer = 0;
    babbling.forEach((v) => {
        for(let i=0; i<speak.length; i++) {
            if(v.includes(speak[i]) && !v.includes(speak[i] + speak[i])) {
                const pattern = new RegExp(speak[i], 'g');
                v=v.replace(pattern, '*'.repeat(speak[i].length));
            }
            
            if(v.replace(/\*/g, '') === '') {
                answer++;
                break;
            }
        }
    })
    return answer;
}