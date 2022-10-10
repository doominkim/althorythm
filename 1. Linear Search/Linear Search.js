function linearSearch(array, searchValue){
    for(let index=0; index < array.length; index++){
        /* if you get correct value, return index */
        if(array[index] == searchValue){
            return index;
        }
        /* if you can't value in array and this step's value is grater then value */
        if(array[index] > searchValue) break;
    }
    return null;
}

console.assert(linearSearch([3, 17, 75, 80, 202], 3) === 0, { number: searchValue, errorMsg: "this is not 0"})
console.assert(linearSearch([3, 17, 75, 80, 202], 22) === null, { number: searchValue, errorMsg: "this is not null"})

