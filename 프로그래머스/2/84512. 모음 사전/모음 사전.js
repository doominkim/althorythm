function solution(word) {
    const words = ['A', 'E', 'I', 'O', 'U']
    const result = []
    for(let i=1; i<=5; i++) {
        result.push(...createDict(words, "", 0, i, []))
    }
    result.sort();
    return result.indexOf(word) + 1    
}

function createDict(words, result, cur, length, resultList) {
    if(length === cur) {
        resultList.push(result);
        return;
    }
    
    for(let i=0; i<words.length; i++) {
        createDict(words, result + words[i], cur + 1, length, resultList);
    }
    
    return resultList;
}