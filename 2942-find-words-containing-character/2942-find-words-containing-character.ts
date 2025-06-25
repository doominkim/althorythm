function findWordsContaining(words: string[], x: string): number[] {
    const arr: number[] = []

    for(let i=0; i<words.length; i++) {
        if(words[i].includes(x)) {
            arr.push(i);
        }
    }

    return arr;
};