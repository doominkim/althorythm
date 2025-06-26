function shuffle(nums: number[], n: number): number[] {
    const xArr: number[] = nums.slice(0, n);
    const yArr: number[] = nums.slice(n, n * 2);
    const arr = []
    for(let i = 0; i < n; i++) {
        arr.push(xArr[i], yArr[i])
    }

    return arr;
};