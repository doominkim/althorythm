function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandy = Math.max(...candies)
    return candies.map((candy) => (candy + extraCandies) >= maxCandy ? true: false)
};