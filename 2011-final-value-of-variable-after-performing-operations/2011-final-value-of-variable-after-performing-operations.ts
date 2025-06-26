function finalValueAfterOperations(operations: string[]): number {
    let count = 0;
    for(const operation of operations) {
        if(operation.includes('+')) {
            count++
        } else {
            count--
        }
    }

    return count
};