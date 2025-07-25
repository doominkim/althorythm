function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    const kDistantIndices = new Array(nums.length).fill(false)
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === key) {
            const start = Math.max(0, i-k)
            const end = Math.min(nums.length - 1, i+k)
            
            for(let j=start; j<=end; j++) {
                kDistantIndices[j] = true
            }
        }
    }

    const result: number[] = []
    for (let i = 0; i < nums.length; i++) {
        if (kDistantIndices[i]) result.push(i)
    }

    return result
};