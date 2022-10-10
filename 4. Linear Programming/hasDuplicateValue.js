function hasDuplicateValue(array){
    let existingNumbers = [];
    for(let i=0; i < array.length; i++){
        if(existingNumbers[array[i]] === 1) {
            return true
        } else {
            existingNumbers[array[i]] = 1
        }
    }
    return false
}

console.assert(hasDuplicateValue([1,2,3,1]) === true, `got ${hasDuplicateValue([1,2,3,1])}, this is wrong`)
console.assert(hasDuplicateValue([1,2,3]) === false, `got ${hasDuplicateValue([1,2,3])}, this is wrong`)