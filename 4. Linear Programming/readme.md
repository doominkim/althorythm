# 4. 선형 해결법


[1, 5, 3, 9, 1, 4]라는 배열이 존재 할 때, 중복된 경우을 구하는 함수는 아래와 같을 수 있다.

```
function hasDuplicateValue(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(i != j && array[i] == array[j]){
                return true
            }
        }   
    }
    return false
}
```
위 함수는 배열의 개수만큼 반복해야하는 수가 기하급수적으로 늘어나는 전형적인 O(N²) 함수라고 볼 수 있다.  
이러한 형태의 함수는 선형 해결법을 통해 속도 개선을 이룰 수 있다.

중복된 값을 구하는 함수를 통해 선형 해결법에 대해 알아보자.

```
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
```


배열을 이용하는 방법을 통해 O(N²) -> O(N)로 크게 최적화 하였다.  
성능의 개선을 이루었으나, 메모리를 더 소비한다는 단점을 가지고 있다.