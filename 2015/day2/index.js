let input = require("fs").readFileSync("input.txt", "utf-8").replace(/\n+$/, "").split("\n");
// input.pop(); // Trim trailing newline
console.log(input);

let part1 = 0,
    part2 = 0;

for (const index in input) {
    const line = input[index];
    const dimensions = line.split("x");
    const [l, w, h] = dimensions;
    dimensions.sort((a, b) => a - b); // L -> G

    const box_wrap = 2 * l * w + 2 * w * h + 2 * h * l;
    const box_slack = dimensions[0] * dimensions[1];
    part1 += box_wrap + box_slack;

    const ribbon_wrap = 2 * dimensions[0] + 2 * dimensions[1];
    const ribbon_bow = l * w * h;
    part2 += ribbon_wrap + ribbon_bow;
}

console.log(part1, part2);
