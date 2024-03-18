const fs = require('fs');
const INPUT = fs.readFileSync('/dev/stdin').toString().split(' ');

function solution() {
    var a = parseInt(INPUT[0]);
    var b = parseInt(INPUT[1]);
    console.log(a+b);
}

solution();