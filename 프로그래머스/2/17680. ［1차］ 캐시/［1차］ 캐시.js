class LRUCache {
    table = [];
    size;
    
    constructor(cacheSize) {
        this.size = cacheSize;    
    }
    
    get(item) { 
        if(this.table.includes(item)) {
            const index = this.table.indexOf(item);
            this.table.splice(index, 1)
            this.set(item)
            return true
        } else {
            return false
        }
    }
    
    set(item) {
        this.table.unshift(item);
        if(this.table.length > this.size) {
            this.table.pop();
        }
    }
}

function solution(cacheSize, cities) {
    const lruCache = new LRUCache(cacheSize);
    let excuteTime = 0;
    for(const item of cities) {
        if(lruCache.get(item.toLowerCase())) {
            excuteTime += 1;
        } else {
            excuteTime += 5;
            lruCache.set(item.toLowerCase());
        }
    }
    
    return excuteTime;
}