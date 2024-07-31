function solution(dirs) {
    const commands = []
    var answer = 0; 
    let x = 0, y = 0
    for(const dir of dirs) {
        let command;
        switch(dir) {
            case "U":
                if(y+1 <= 5) {
                    command = String([[x, y], [x, y+1]].sort())
                    if(!commands.includes(command)) answer++
                    commands.push(command)
                    y++;
                }
                break;
            case "D":
                if(y-1 >= -5) {
                    command = String([[x, y], [x, y-1]].sort())
                    if(!commands.includes(command)) answer++
                    commands.push(command)
                    y--;
                }
                break;
            case "L":
                if(x-1 >= -5) {
                    command = String([[x, y], [x-1, y]].sort())
                    if(!commands.includes(command)) answer++
                    commands.push(command)
                    x--;
                }
                break;
            case "R":
                if(x+1 <= 5) {
                    command = String([[x, y], [x+1, y]].sort())
                    if(!commands.includes(command)) answer++
                    commands.push(command)
                    x++;
                }
                break;
        }
    }
    return answer;
}