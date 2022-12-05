"use strict";

// Part 1
// ======

const part1 = (input) => {
    let elfs = input
        .split("\n\n")
        .map((str) =>
            str
                .split("\n")
                .map((x) => parseInt(x))
                .reduce((acc, cur) => acc + cur, 0)
        )
        .sort((a, b) => b - a);

    let output = elfs;
    return output;
};

// Part 2
// ======

const part2 = (input) => {
    let elfs = input
        .split("\n\n")
        .map((str) =>
            str
                .split("\n")
                .map((x) => parseInt(x))
                .reduce((acc, cur) => acc + cur, 0)
        )
        .sort((a, b) => b - a);

    let output = elfs.splice(0, 3).reduce((acc, cur) => acc + cur, 0);

    return output;
};

module.exports = { part1, part2 };
