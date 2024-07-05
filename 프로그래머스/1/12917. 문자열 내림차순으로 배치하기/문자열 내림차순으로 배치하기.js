function solution(s) {
    return s.split('')
            .map((char) => [char, char.charCodeAt()])
            .sort((a, b) => b[1] - a[1])
            .map((e) => e[0])
            .join('');
}