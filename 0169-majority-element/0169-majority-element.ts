function majorityElement(nums: number[]): number {
    const n = nums.length;
    const countOfNumber = new Map();

    for(let i=0; i<n; i++) {
        if(!countOfNumber.has(nums[i])) countOfNumber.set(nums[i], 0)
        countOfNumber.set(nums[i], countOfNumber.get(nums[i]) + 1)
    }
    
    console.log(countOfNumber)

    for(const [value, item] of countOfNumber.entries()) {
        console.log(value, item)
    }

    return n
};