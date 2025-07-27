function sortedSquares(nums: number[]): number[] {
    const result: number[] = []
    for(const num of nums) {
        result.push(Number(Math.pow(num, 2)))
    }

    return result.sort((a, b) => a-b)
};