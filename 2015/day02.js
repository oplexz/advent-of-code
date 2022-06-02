"use strict";

// Part 1
// ======

const part1 = (input) => {
    input = input.split("\n");

    let output = 0;

    for (let i = 0; i < input.length; i++) {
        const line = input[i];

        const dimensions = line.split("x");
        const [l, w, h] = dimensions;
        dimensions.sort((a, b) => a - b); // L -> G

        const box_wrap = 2 * l * w + 2 * w * h + 2 * h * l;
        const box_slack = dimensions[0] * dimensions[1];
        output += box_wrap + box_slack;
    }

    return output;
};

// Part 2
// ======

const part2 = (input) => {
    input = input.split("\n");

    let output = 0;

    for (let i = 0; i < input.length; i++) {
        const line = input[i];

        const dimensions = line.split("x");
        const [l, w, h] = dimensions;
        dimensions.sort((a, b) => a - b); // L -> G

        const ribbon_wrap = 2 * dimensions[0] + 2 * dimensions[1];
        const ribbon_bow = l * w * h;
        output += ribbon_wrap + ribbon_bow;
    }

    return output;
};

module.exports = { part1, part2 };
