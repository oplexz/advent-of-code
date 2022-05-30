const input = require("fs").readFileSync("input.txt", "utf-8");

let pos = 0;
let part1, part2;

for (let index = 0; index < input.length; index++) {
    const char = input[index];
    if (char == "(") pos++;
    else pos--;

    if (!part2 && pos < 0) part2 = index + 1; // First character index is 1
}

part1 = pos;

console.log(part1, part2);
