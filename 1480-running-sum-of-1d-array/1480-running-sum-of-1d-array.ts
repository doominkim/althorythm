function runningSum(nums: number[]): number[] {
    // const prefixSum: number[] = []
    // let sum = 0;
    // for(const num of nums) {
    //     sum += num
    //     prefixSum.push(sum)
    // }

    const prefixSum = nums.reduce((acc, cur) => {
        acc.push((acc[acc.length - 1] ?? 0) + cur)
        return acc
    }, [])

    return prefixSum
};