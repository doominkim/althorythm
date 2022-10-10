function bubleSort(array){
    let sorted = false;
    let bubleIndex = array.length-1
    while(!sorted) {
        sorted = true;
        for(let index=0; index < bubleIndex; index++){
            if(array[index] > array[index+1]) {
                /* es2015 구조분해 할당법 */
                [array[index], array[index+1]] = [array[index+1], array[index]] 
                sorted = false
            }
        }
        /* 
        이 알고리즘이 버블 정렬이라 불리는 까닭은 바로 여기에 있다.
        각 패스스루 마다 정렬되지 않은 값 중 가장 큰 값 `버블`이 올바른 위치로 간다.
        즉 패스스루 마다 가장 맨 뒤에 있는 원소는 올바른 위치에 있다는 뜻이므로
        더 이상 반복할 이유가 없으니 아래와 같이 bubleIndex를 줄여준다.
        */
        bubleIndex--
    }
    return array
}

console.log(bubleSort([34,2,1,2,4,1,6,8,90,2,1,2,4,1,6,8,90,2,1,2,4,1,6,8,90,2,1,2,4,1,6,8,90,2,1,2,4,1,6,8,90,2,1,2,4,1,6,8,90]))
console.assert(bubleSort([3,2,1]) == [1,2,3], "error!!")