function selectionSort(array){
    let pointer = 0;
    let minValueIndex
    while(pointer <= array.length){
        minValueIndex = pointer
        for(let i = pointer; i < array.length; i++){
            if(array[minValueIndex] > array[i]){
                minValueIndex = i
            }
        }
        if(pointer != minValueIndex) [array[pointer], array[minValueIndex]] = [array[minValueIndex], array[pointer]]
        pointer++
    }
    return array
}

console.assert(JSON.stringify(selectionSort([10, 9, 8, 7, 6, 5, 4, 2, 1])) === JSON.stringify([1, 2, 4, 5, 6, 7, 8, 9, 10]), 'testcase1 arrays is not equal')
console.assert(JSON.stringify(selectionSort([111, 222, 111, 333, 111, 444])) === JSON.stringify([111, 111, 111, 222, 333, 444]), 'testcase2 arrays is not equal')
