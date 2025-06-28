function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    for(let i=0; i<k; i++) {
        let minIdx = 0;
        let min = nums[0]
        // 최소값을 찾는다.

        for(let j=0; j<nums.length;j++) {
            if(nums[j] < min) {
                minIdx = j
                min = nums[j]
            }
        }

        nums[minIdx] *= multiplier
    }

    return nums
};