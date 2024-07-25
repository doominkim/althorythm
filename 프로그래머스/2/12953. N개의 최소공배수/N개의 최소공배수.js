
function gcd(a, b) {
    let gcd = 1
    for(let i=2; i<=Math.min(a, b); i++){
        if(a % i === 0 && b % i === 0){
            gcd = i;
        }
    }
    return gcd;
}

function solution(arr) {
    let answer = 1
    for(const item of arr) {
        answer = answer * item / gcd(answer, item)
    }
    return answer
}

// function gcd(arr) {
//     const gcdHash = {}
//     for(const number of arr) {
//         gcdHash[number] = []
//         for(let i=1; i<=number; i++) {
//             if(number % i === 0) gcdHash[number].push(i)
//         }
//     }
    
//     loop1: for(let i=gcdHash[arr[0]].length - 1; i>=0; i--) {
//         for(const number of arr) {
//             if(!gcdHash[number].includes(gcdHash[arr[0]][i])) {
//                 continue loop1;
//             }
//         }
//         return gcdHash[arr[0]][i]
//     }
// }


