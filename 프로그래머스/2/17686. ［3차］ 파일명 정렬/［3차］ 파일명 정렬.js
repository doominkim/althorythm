function solution(files) {
    const answer = []
    const hash = {}
    
    for(const [index, file] of files.entries()) {
        const matchNumber = file.match(/[0-9]+/)
        if(matchNumber) {
            const head = file.slice(0, matchNumber.index).toLowerCase()
            if(!(head in hash)) hash[head] = []

            hash[head].push({
                head: file.slice(0, matchNumber.index),
                number: Number(matchNumber[0]),
                origin: matchNumber[0],
                index: index,
                tail: file.slice(matchNumber.index + matchNumber[0].length, file.length)
            })
        } 
    }

    for(const item of Object.keys(hash)) {
        hash[item] = hash[item].sort((a, b) => {
            if(a.number === b.number) {
                return a.index - b.index
            } else {
                return a.number - b.number    
            }
        })
    }
    
    for(const item of Object.keys(hash).sort()) {
        for(const file of hash[item]) {
            answer.push(file.head + file.origin + file.tail)
        }
    }
    
    return answer
}
