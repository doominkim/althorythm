function solution(people, limit) {
    people = people.sort((a, b) => { return a-b })   
    let numberOfBoats = 0;
    let firstIndex = 0;
    let lastIndex = people.length - 1;
    while(firstIndex <= lastIndex) {
        if(people[firstIndex] + people[lastIndex] <= limit) firstIndex++
        lastIndex--;
        numberOfBoats++;
    }
    return numberOfBoats
}
    
//     // 현재 구명보트와의 차이의 값을 구한다. Sort를 통해 최대한 적은 수를 반복한다.
//     // 사용된 값을 표시할 배열을 선언한다.
//     const array = Array.from({length: people.length}, () => { return 0 })
//     people = people.sort((a, b) => { return b-a }) 
//     // splice 함수는 성능면에서 효율적이지가 않아 반드시 문제가 발생하므로 다른 방법을 사용한다.
    
//     let save = 0
//     let count = 0
//     let sum = 0
//     let savePoint = false
//     while(count < people.length){
//         // 시작점이 이미 구출된 사람이면 해당 회차를 패스한다.
//         if(array[count] == 1) {
//             count++
//             continue
//         }
        
//         // 해당 회차에 둘 이상을 구출 했는지 확인 할 플래그값 
//         savePoint = false
//         for(let i=count+1; i<people.length; i++){
//             // 루프 중 구출된 사람이 있다면 패스한다.
//             if(array[i] == '1') continue
            
//             if(people[count] + people[i] <= limit) {
//                 array[count] = 1
//                 array[i] = 1
//                 save++
//                 savePoint = true
//                 break;
//             }
//         }
//         // 둘 이상 한 배에 태울 수 없었던 경우
//         if(!savePoint) {
//             array[count] = 1
//             save++
//         }
        
//         count++
//     }
//     return save;
