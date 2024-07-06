function solution(name, yearning, photo) {
    const hash = {}
    for(const [idx, val] of name.entries()) {
        hash[val] = yearning[idx]
    }
    
    return photo.map((item) => item.reduce((acc, cur) => acc + (cur in hash ? hash[cur] : 0), 0));
}