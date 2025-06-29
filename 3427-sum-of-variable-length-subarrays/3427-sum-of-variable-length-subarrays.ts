function subarraySum(nums: number[]): number {
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        const start = Math.max(0, i - nums[i]);
        const subarray = nums.slice(start, i+1).reduce((acc, cur) => acc+cur, 0);
        sum += subarray;
    }  
    
    return sum;
};