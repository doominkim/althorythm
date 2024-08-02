function calculateTime(startTime, endTime) {
    const [startHour, startMinutes] = startTime.split(':');
    const now = new Date()
    const [endHours, endMinutes] = endTime.split(':')
    now.setHours(startHour)
    now.setMinutes(startMinutes)
    now.setHours(endHours - now.getHours())
    now.setMinutes(endMinutes - now.getMinutes())
    
    return now.getHours() * 60 + now.getMinutes()
}

function solution(fees, records) {
    const [defaultTime, defaultPrice, perMinutes, perPrice] = fees
    const hash = {}
    
    for(const record of records) {
        const [currentTime, carno, inout] = record.split(' ')
        // console.log(time, carno, inout)    
        if(!(carno in hash)) {
            hash[carno] = {
                startTime: currentTime,
                totalTime: 0
            }   
        } else {
            if(inout === 'IN') {
                hash[carno].startTime = currentTime;
            } else {
                const time = calculateTime(hash[carno].startTime, currentTime)
                hash[carno].startTime = ''
                hash[carno].totalTime += time
            } 
        }
    }
    
    const answer = []
    for(let [key, val] of Object.entries(hash).sort((a, b) => a[0] - b[0])) {
        if(val.startTime) {
            const time = calculateTime(val.startTime, '23:59')
            val.startTime = ''            
            val.totalTime += time;
        }
        
        const extraPrice = (Math.ceil((val.totalTime - defaultTime) / perMinutes)) * perPrice
        val.totalPrice = defaultPrice + (extraPrice > 0 ? extraPrice : 0)
        answer.push(val.totalPrice)
    }
    
    return answer;
}