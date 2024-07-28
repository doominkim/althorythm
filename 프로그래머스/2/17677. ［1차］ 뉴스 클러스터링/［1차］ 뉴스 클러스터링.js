function solution(str1, str2) { 
    const str1arr = [];
    const str2arr = [];
    
    for(let i=0; i<str1.length-1; i++) {
        if(/[a-z][a-z]/i.test(str1[i] + str1[i+1])) {
            str1arr.push((str1[i] + str1[i+1]).toLowerCase());
        }
    }

    for(let i=0; i<str2.length-1; i++) {
        if(/[a-z][a-z]/i.test(str2[i] + str2[i+1])) {
            str2arr.push((str2[i] + str2[i+1]).toLowerCase());
        }
    }

    if((str1 || str2) && str1arr.length === 0 && str2arr.length === 0) return 65536;
    
    const [str1Hash, str2Hash] = createHash(str1arr, str2arr);
    const union = createUnion(str1Hash, str2Hash);
    const intersection = createIntersection(str1Hash, str2Hash);
    
    return intersection === 0 && union === 0 ? 1 : Math.floor((intersection / union)*65536);
}

function createHash(str1, str2) {
    const str1Hash = {}, str2Hash = {};
    for(const item of str1) {
        str1Hash[item] = (str1Hash[item] || 0) + 1;
    }
    for(const item of str2) {
        str2Hash[item] = (str2Hash[item] || 0) + 1;
    }
    return [str1Hash, str2Hash];
}

function createUnion(str1Hash, str2Hash) {
    const unionHash = {};
    for(const [key, val] of Object.entries(str1Hash)) {
        if(str2Hash[key]) {
            unionHash[key] = Math.max(str2Hash[key], val);
        } else {
            unionHash[key] = val;
        }
    }
    
    for(const [key, val] of Object.entries(str2Hash)) {
        if(str1Hash[key]) {
            unionHash[key] = Math.max(str1Hash[key], val);
        } else {
            unionHash[key] = val;
        }
    }
    
    return Object.values(unionHash).reduce((acc, cur) => acc + cur, 0);
}

function createIntersection(str1Hash, str2Hash) {
    const intersectionHash = {}
    for(const [key, val] of Object.entries(str1Hash)) {
        const min = Math.min(str2Hash[key], val);
        if(min) intersectionHash[key] = min;
    }
    return Object.values(intersectionHash).reduce((acc, cur) => acc + cur, 0);
}