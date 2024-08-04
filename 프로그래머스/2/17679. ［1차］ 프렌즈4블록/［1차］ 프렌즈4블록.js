function solution(m, n, board) {
    board = board.map((v) => v.split(''))
    while(true) {
        const clearedBlock = new Set()
        for(let i=0; i<m-1; i++) {
            for(let j=0; j<n-1; j++) {
                if(board[i][j] !== null &&
                   board[i][j] === board[i+1][j] &&
                   board[i][j] === board[i][j+1] &&
                   board[i][j] === board[i+1][j+1]) {
                    clearedBlock.add([i, j])
                    clearedBlock.add([i+1, j])
                    clearedBlock.add([i, j+1])
                    clearedBlock.add([i+1, j+1])
                }
            }
        }
        
        if(clearedBlock.size > 0) {
            for(const block of clearedBlock) {
                const [x, y] = block
                board[x][y] = null
            }
                     
            for(let i=m-1; i>0;) {
                let move = false;
                for(let j=0; j<n; j++) {
                    if(
                        board[i-1][j] &&
                        !board[i][j]) {
                        board[i][j] = board[i-1][j];
                        board[i-1][j] = null;
                        move = true
                    }
                }
                move && i+1 <= m-1 ? i++: i--;
            }
            
        } else {
            break;
        }
    }
    
    let answer = 0;
    for(const rows of board) {
        for(const row of rows) {
            if(row === null) answer++
        }
    }
    return answer;
}