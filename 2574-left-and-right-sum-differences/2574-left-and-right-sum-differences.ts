function leftRightDifference(nums: number[]): number[] {
    const n = nums.length;
    const answer: number[] = [];
    for(let i = 0; i < n; i++) {
        const leftSum = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0);
        const rightSum = nums.slice(i + 1, n).reduce((acc, cur) => acc + cur, 0);
        answer.push(Math.abs(leftSum - rightSum));
    }

    return answer;
};