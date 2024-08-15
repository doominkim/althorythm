function solution(n, wires) {
    const result = [];
    for(let i=0; i<wires.length; i++) {
        result.push(getTowers(wires.slice(0,i).concat(wires.slice(i+1,wires.length))))
    }
    
    console.log(result)
    return result.filter((v) => v.length > 1).map(([a,b]) => Math.abs(a-b)).sort((a,b) => a-b)[0] ?? n - 2
}

function getTowers(wires) {
    const hash = {}
    for(const wire of wires) {
        wire[0] in hash ? hash[wire[0]].child.push(wire[1]) : hash[wire[0]] = {child: [wire[1]], visit: false}
        wire[1] in hash ? hash[wire[1]].child.push(wire[0]) : hash[wire[1]] = {child: [wire[0]], visit: false}
    }
    
    const queue = [Number(Object.entries(hash).find((v) => !v[1].visit)[0])]
    let towers = new Set()
    const result = []
    while(queue.length > 0) {
        const node = queue.shift()
        
        if(node in hash && !hash[node].visit) {
            hash[node].visit = true
            towers.add(node)
            for(const childNode of hash[node].child) {
                towers.add(childNode)
                queue.push(childNode)
            }
        }
        
        if(queue.length === 0) {
            result.push(towers.size)
            const leftTowers = Object.entries(hash).find((v) => !v[1].visit)
            if(leftTowers) {
                queue.push(Number(leftTowers[0]))
                towers = new Set()
            }
        } 
    }
    
    return result
}

