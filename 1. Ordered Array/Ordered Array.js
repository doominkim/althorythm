function linearSearch(array, searchValue){
    let answer = null;
    for(let index=0; index < array.length; index++){
        /* if you get correct value, return index */
        if(array[index] == searchValue){
            answer = index;
        }

        /* if you can't value in array and this step's value is grater then value */
        if(array[index] > searchValue) break;
    }
    return answer;
}

let searchValue;
const array = [3, 17, 75, 80, 202];

searchValue = 3
console.log(linearSearch(array, searchValue))
console.assert(linearSearch(array, searchValue) === 0, { number: searchValue, errorMsg: "this is not 0"})

searchValue = 22
console.log(linearSearch(array, searchValue))
console.assert(linearSearch(array, searchValue) === null, { number: searchValue, errorMsg: "this is not null"})

