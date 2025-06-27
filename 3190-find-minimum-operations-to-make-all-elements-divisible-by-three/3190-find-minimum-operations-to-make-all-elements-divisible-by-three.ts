function minimumOperations(nums: number[]): number {
    return nums.reduce((acc, cur) => acc + (cur % 3 !== 0 ? 1 : 0), 0)
};