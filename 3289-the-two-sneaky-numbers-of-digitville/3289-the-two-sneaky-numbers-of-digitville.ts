function getSneakyNumbers(nums: number[]): number[] {
    const arr: number[] = []
    for(let i=0; i < nums.length; i++) {
        for(let j=i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                arr.push(nums[j])
            }
        }
    }

    return arr.sort()
};