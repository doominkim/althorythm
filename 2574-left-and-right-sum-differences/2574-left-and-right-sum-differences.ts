function leftRightDifference(nums: number[]): number[] {
    const n = nums.length;
    const prefixSum: number[] = Array(n+1).fill(0)
    const answer: number[] = [];

    for(let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1] 
    }

    for(let i = 0; i < n; i++) {
        const left = prefixSum[i];
        const right = Math.abs(prefixSum[i + 1] - prefixSum[n]);
        Math.abs(left - right)
    }
    

    return [1]
};