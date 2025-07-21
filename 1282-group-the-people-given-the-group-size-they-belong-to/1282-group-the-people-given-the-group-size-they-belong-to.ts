function groupThePeople(groupSizes: number[]): number[][] {
    const matchedGroup: number[][] = []
    const groupMap: Map<number, number[]> = new Map()

    for(let i=0; i<groupSizes.length; i++) {
        if(groupMap.has(groupSizes[i])) {
            groupMap.set(groupSizes[i], [...groupMap.get(groupSizes[i]), i])
        } else {
            groupMap.set(groupSizes[i], [i])
        }
    }

    for(const [key, val] of groupMap.entries()) {
        let count = 1;
        for(let i=0; i<val.length; i+=key) {
            matchedGroup.push(val.slice(i, key * count))
            count++
        }
    }

    return matchedGroup
};