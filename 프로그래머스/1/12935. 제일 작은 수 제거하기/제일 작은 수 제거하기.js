function solution(arr) {
    var answer = [];

    let minObj = {
        'idx': 0,
        'val': arr[0]
    }
    for(let i=0; i<arr.length; i++) {
        if(minObj['val'] > arr[i]) {
            minObj['idx'] = i
            minObj['val'] = arr[i]
        }
    }

    arr.splice(minObj['idx'], 1);
    return arr.length !== 0 ? arr : [-1]
}