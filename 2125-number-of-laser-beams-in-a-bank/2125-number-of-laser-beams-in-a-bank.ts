function numberOfBeams(bank: string[]): number {
    const doors = bank.map((row) => row.match(/1/g)?.length ?? 0).filter((row) => row > 0)

    let lazerBeamCount = 0;
    for(let i=0; i<doors.length - 1; i++) {
        lazerBeamCount += doors[i] * doors[i+1]
    }

    return lazerBeamCount
};