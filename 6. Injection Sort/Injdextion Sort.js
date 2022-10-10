function injectionSort(array){
    let tempValue, position;
    for(let i = 1; i < array.length; i++){
        tempValue = array[i];
        position = i - 1;
        while(position >= 0){
            if(array[position] > tempValue){
                array[position + 1] = array[position];
                position = position - 1;
            } else {
                break;
            }
        }
        array[position + 1] = tempValue
    }

    return array;
}

console.log(injectionSort([4, 3, 2, 1, 5, 6, 7, 10, 12, 1, 3, 145]))
