function countConsistentStrings(allowed: string, words: string[]): number {
    const regexp = new RegExp(`[^${allowed}]`);
    
    let count = 0;
    for(const word of words) {
        console.log(word.search(regexp))
        if(word.search(regexp) < 0) {
            count++
        }
    }

    return count
};