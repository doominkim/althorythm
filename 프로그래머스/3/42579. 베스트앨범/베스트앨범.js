function solution(genres, plays) {
    var playlist = [];
    const genreTotal = {}
    
    // 장르별 플레이수 통계
    for(let i=0; i<genres.length; i++) {
        if(!Object.keys(genreTotal).includes(genres[i])){
            genreTotal[genres[i]] = 0;
        } 
        genreTotal[genres[i]] += plays[i]
    }
    
    // 장르 플레이수 내림차순 정렬
    const genreRank = Object.entries(genreTotal)
      .sort(([, a], [, b]) => b-a)
      .map(([k,v]) => k)
    
    for(const genre of genreRank) {
        let temp = []
        for(let i=0; i<genres.length; i++) {
            if(genres[i] === genre) {
                temp.push([i, plays[i]])
            }
        }
        const sorted = temp.sort((a, b) => b[1] - a[1]).slice(0, 2)
        playlist.push(...sorted.map((music) => music[0]))
    }
    
    return playlist
}