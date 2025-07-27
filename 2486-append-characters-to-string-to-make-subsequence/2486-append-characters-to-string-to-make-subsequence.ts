function appendCharacters(s: string, t: string): number {
    let sIdx = 0;
    let tIdx = 0;

    while(sIdx < s.length && tIdx < t.length) {
        if(s[sIdx] === t[tIdx]) {
            sIdx++
            tIdx++
        } else {
            sIdx++
        }
    }

    return t.length - tIdx
};