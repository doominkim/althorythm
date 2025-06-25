function eliminateMaximum(dist: number[], speed: number[]): number {
    const n = dist.length;
    const times = dist.map((d, i) => d / speed[i]); // 도달 시간
    times.sort((a, b) => a - b); // 빠른 순 정렬

    for (let minute = 0; minute < n; minute++) {
        if (times[minute] <= minute) {
            return minute; // 도달한 몬스터 있음
        }
    }

    return n; // 전부 제거 가능
};