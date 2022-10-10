function binarySearch(array, searchValue){
    /* 배열의 상한선과 하한선을 정한다. */
    let lowerIndex = 0
    let upperIndex = array.length - 1

    while (lowerIndex <= upperIndex) {
        let middleIndex = Math.round((upperIndex + lowerIndex) / 2)
        let value = array[middleIndex]
        if (searchValue == value) {
            return middleIndex
        } else if (searchValue < value) {
            upperIndex = middleIndex - 1
        } else if (searchValue > value) {
            lowerIndex = middleIndex + 1
        } 
    }
    return null
}

console.log(binarySearch([3, 17, 75, 80, 202], 17));