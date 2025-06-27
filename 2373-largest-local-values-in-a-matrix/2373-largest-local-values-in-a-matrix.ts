function largestLocal(grid: number[][]): number[][] {
    const n = grid.length - 2;
    const maxGrid: number[][] = Array.from({length: n}, () => Array(n).fill(0))

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            maxGrid[i][j] = Math.max(...grid
                .slice(i, i + 3)
                .map((rows) => rows.slice(j, j + 3))
                .map((rows) => Math.max(...rows)))
        }
    } 
    
    return maxGrid
};