const input = require("fs").readFileSync("input.txt", "utf-8").split("\n");
input.pop();

// const map = (function () {
//     let obj = {};

//     for (let x = 0; x < 1000; x++) {
//         for (let y = 0; y < 1000; y++) {
//             obj[`${x};${y}`] = 0;
//         }
//     }

//     return obj;
// })();

const map = {};

for (let i = 0; i < 3; i++) {
    let matched = input[i]
        .match(/([a-z]+|[a-z]+ [a-z]+) (\d+),(\d+) [a-z]+ (\d+),(\d+)/)
        .map((x) => (!isNaN(parseInt(x)) ? parseInt(x) : x));
    matched.shift();

    const [action, x1, y1, x2, y2] = matched;

    console.log(matched);
}

let part1 = 0,
    part2 = 0;

console.log(part1, part2);
