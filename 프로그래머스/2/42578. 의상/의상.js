function solution(clothes) {
    let clotheTable = {}
    for(const clothe of clothes) {
        if(!Object.keys(clotheTable).includes(clothe[1])){
            clotheTable[clothe[1]] = new Set()
        } 
        clotheTable[clothe[1]].add(clothe[0])
    }
    
    let size = 0
    let gop = 1
    for(const key in clotheTable) {
        gop *= clotheTable[key].size + 1
    }
    return gop - 1
}