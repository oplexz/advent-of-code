"use strict";

// Part 1
// ======

const part1 = (input) => {
    input = input.split("\n");

    let map = {};

    for (let i = 0; i < input.length; i++) {
        const [_, action, x1, y1, x2, y2] = input[i]
            .match(/([a-z]+|[a-z]+ [a-z]+) (\d+),(\d+) [a-z]+ (\d+),(\d+)/)
            .map((x) => (!isNaN(parseInt(x)) ? parseInt(x) : x));

        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                const pos = `${x};${y}`;

                if (!map.hasOwnProperty(pos)) map[pos] = 0;

                switch (action) {
                    case "turn on":
                        map[pos] = 1;

                        break;

                    case "turn off":
                        map[pos] = 0;

                        break;

                    case "toggle":
                        map[pos] = +!map[pos];

                        break;
                }
            }
        }
    }

    let output = Object.values(map).reduce((acc, cur) => acc + cur, 0);

    return output;
};

// Part 2
// ======

const part2 = (input) => {
    input = input.split("\n");

    let map = {};

    for (let i = 0; i < input.length; i++) {
        const [_, action, x1, y1, x2, y2] = input[i]
            .match(/([a-z]+|[a-z]+ [a-z]+) (\d+),(\d+) [a-z]+ (\d+),(\d+)/)
            .map((x) => (!isNaN(parseInt(x)) ? parseInt(x) : x));

        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                const pos = `${x};${y}`;

                if (!map.hasOwnProperty(pos)) map[pos] = 0;

                switch (action) {
                    case "turn on":
                        map[pos]++;

                        break;

                    case "turn off":
                        if (map[pos] >= 1) map[pos]--;

                        break;

                    case "toggle":
                        map[pos] += 2;

                        break;
                }
            }
        }
    }

    let output = Object.values(map).reduce((acc, cur) => acc + cur, 0);

    return output;
};

module.exports = { part1, part2 };
