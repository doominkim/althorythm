function subsetXORSum(nums: number[]): number {
    const n = nums.length;
    let totalXORSum = 0;

    for(let i = 0; i < (1 << n); i++ ) {
        let xor = 0;

        for(let j = 0; j < n; j++) {
            if(i & (1 << j)) {
                xor ^= nums[j];
            }
        }
        totalXORSum += xor;
    }
    return totalXORSum;
};