const input = require("fs").readFileSync("input.txt", "utf-8").trim().split("\n");

let part1_map = {},
    part2_map = {};

for (let i = 0; i < input.length; i++) {
    let matched = input[i]
        .match(/([a-z]+|[a-z]+ [a-z]+) (\d+),(\d+) [a-z]+ (\d+),(\d+)/)
        .map((x) => (!isNaN(parseInt(x)) ? parseInt(x) : x));
    matched.shift();

    const [action, x1, y1, x2, y2] = matched;

    for (let x = x1; x <= x2; x++) {
        for (let y = y1; y <= y2; y++) {
            const pos = `${x};${y}`;
            switch (action) {
                case "turn on":
                    part1_map[pos] = 1;

                    if (!part2_map.hasOwnProperty(pos)) part2_map[pos] = 0;
                    part2_map[pos]++;

                    break;

                case "turn off":
                    part1_map[pos] = 0;

                    if (!part2_map.hasOwnProperty(pos)) part2_map[pos] = 0;
                    if (part2_map[pos] >= 1) part2_map[pos]--;

                    break;

                case "toggle":
                    if (!part1_map.hasOwnProperty(pos)) part1_map[pos] = 0;
                    part1_map[pos] = +!part1_map[pos];

                    if (!part2_map.hasOwnProperty(pos)) part2_map[pos] = 0;
                    part2_map[pos] += 2;

                    break;
            }
        }
    }
}

let part1 = 0,
    part2 = 0;

part1 = Object.values(part1_map).reduce((acc, cur) => acc + cur, 0);
part2 = Object.values(part2_map).reduce((acc, cur) => acc + cur, 0);

console.log(part1, part2);
