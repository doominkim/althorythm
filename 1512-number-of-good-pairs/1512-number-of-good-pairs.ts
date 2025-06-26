function numIdenticalPairs(nums: number[]): number {
    const hash = new Map<number, number> ()
    let count = 0
    for(const num of nums) {
        if(hash.has(num)) {
            hash.set(num, hash.get(num)! + 1)
        } else {
            hash.set(num, 1)
        }
    }

    for(const value of hash.values()) {
        count += value * (value - 1) / 2
    }

    return count;  
};