function minSteps(s: string, t: string): number {
    const sMap = new Map()
    const tMap = new Map()

    for(let i=0; i<s.length; i++) {
        if(!sMap.has(s[i])) sMap.set(s[i], 0)
        sMap.set(s[i], sMap.get(s[i]) + 1)
    }

    for(let i=0; i<t.length; i++) {
        if(!tMap.has(t[i])) tMap.set(t[i], 0)
        tMap.set(t[i], tMap.get(t[i]) + 1)
    }

    let count = 0
    for (const [ch, sCount] of sMap.entries()) {
        const tCount = tMap.get(ch) ?? 0
        console.log(ch, sCount, tCount)
        if (sCount > tCount) count += sCount - tCount
    }

    return count
};