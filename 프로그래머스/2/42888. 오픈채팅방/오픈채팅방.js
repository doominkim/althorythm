function solution(record) {
    const hash = {};
    var answer = [];
    
    for(const event of record) {
        const [type, uid, nickname] = event.split(' ')

        if(['Enter', 'Change'].includes(type)) {
            hash[uid] = nickname
        }
        
        if(['Enter'].includes(type)) {
            answer.push(`{${uid}}님이 들어왔습니다.`)
        }
        
        if(['Leave'].includes(type)) {
            answer.push(`{${uid}}님이 나갔습니다.`)
        }
    }
    
    answer = answer.map((item) => {
        const uidPattern = item.match(/\{[a-z0-9]+\}/gi)
        const uid = uidPattern[0].replace(/[\{\}]/g, '') 
        item = item.replace(uidPattern, hash[uid])
        return item;
    })
    
    return answer;
}