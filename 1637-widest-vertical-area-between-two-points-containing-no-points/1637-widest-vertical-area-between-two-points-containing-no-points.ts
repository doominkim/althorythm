function maxWidthOfVerticalArea(points: number[][]): number {
    const x = points.map((point) => point[0]).sort((a,b) => a-b)
    const arr: number[] = []
    for(let i=0; i<x.length - 1; i++) {
        arr.push(x[i+1] - x[i])
    }

    return Math.max(...arr)
};