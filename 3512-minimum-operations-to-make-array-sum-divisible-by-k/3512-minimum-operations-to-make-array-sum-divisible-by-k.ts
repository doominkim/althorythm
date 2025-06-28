function minOperations(nums: number[], k: number): number {
    const sum = nums.reduce((acc, cur) => acc+cur, 0)

    return sum % k
};