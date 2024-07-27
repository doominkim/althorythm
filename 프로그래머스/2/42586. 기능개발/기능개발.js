function solution(progresses, speeds) {
    const timeHash = {}
    let day = 1;
    while(progresses.length > 0) {
        if(progresses[0] + speeds[0] * day >= 100) {
            progresses.shift();
            speeds.shift();
            if(!(day in timeHash)) timeHash[day] = 0;
            timeHash[day]++;    
        } else {
            day++;
        }
    }
    
    return Object.values(timeHash)
}