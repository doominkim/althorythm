function solution(s) {
    const list = [];
    for(let word of s.split(' ')) {
        let convertedWord = '';
        for(let i=0; i<word.length; i++) {
            convertedWord += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
        }
        list.push(convertedWord);
    }
    return list.join(' ');
}