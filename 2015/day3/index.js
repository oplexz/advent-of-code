const input = require("fs").readFileSync("input.txt", "utf-8");
const directions = input.split("");

let part1_x = 0,
    part1_y = 0,
    part2_x1 = 0,
    part2_y1 = 0,
    part2_x2 = 0,
    part2_y2 = 0;

let part1_map = { "0;0": 1 },
    part2_map = { "0;0": 1 };

let part2_turn = false;

function addGift(map, coords) {
    const pos = `${coords[0]};${coords[1]}`;

    if (!map[pos]) map[pos] = 1;
    else map[pos]++;
}

directions.forEach((dir) => {
    let offset_x = 0,
        offset_y = 0;

    switch (dir) {
        case ">":
            offset_x = 1;
            break;

        case "v":
            offset_y = 1;
            break;

        case "<":
            offset_x = -1;
            break;

        case "^":
            offset_y = -1;
            break;
    }

    part1_x += offset_x;
    part1_y += offset_y;

    addGift(part1_map, [part1_x, part1_y]);

    // robosanta has coords x2;y2
    if (part2_turn) {
        part2_x2 += offset_x;
        part2_y2 += offset_y;

        addGift(part2_map, [part2_x2, part2_y2]);
    } else {
        part2_x1 += offset_x;
        part2_y1 += offset_y;

        addGift(part2_map, [part2_x1, part2_y1]);
    }

    part2_turn = !part2_turn;
});

let part1 = Object.keys(part1_map).length,
    part2 = Object.keys(part2_map).length;

console.log(part1, part2);
