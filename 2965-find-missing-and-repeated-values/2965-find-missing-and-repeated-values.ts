function findMissingAndRepeatedValues(grid: number[][]): number[] {
    const n = grid[0].length;
    const gridMap: Map<number, number> = new Map()

    for(let i=1; i<= n*n; i++) {
        gridMap.set(i, 0)
    }

    for(let x=0; x<n; x++) {
        for(let y=0; y<n; y++) {
            gridMap.set(grid[x][y], gridMap.get(grid[x][y]) + 1)
        }
    }

    const result = [0, 0]
    for(const [key, value] of gridMap.entries()) {
        if(value === 0) result[1] = key
        if(value === 2) result[0] = key
    }

    return result
};