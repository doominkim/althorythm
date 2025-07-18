function kthDistinct(arr: string[], k: number): string {
    const wordTable: Map<string, number> = new Map();

    for(let i=0; i<arr.length; i++) {
        if(wordTable.has(arr[i])) {
            wordTable.set(arr[i], wordTable.get(arr[i]) + 1)
        } else {
            wordTable.set(arr[i], 1)
        }
    }

    const result = []
    for(const [key, count] of wordTable.entries()) {
        if(count === 1) result.push(key)
    }

    return result[k-1] ?? ""
};