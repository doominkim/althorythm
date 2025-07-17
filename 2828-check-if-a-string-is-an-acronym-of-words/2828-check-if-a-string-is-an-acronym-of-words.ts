function isAcronym(words: string[], s: string): boolean {
    return words.map((word) => word[0]).join('') === s
};