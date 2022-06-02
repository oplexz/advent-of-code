"use strict";

const md5 = (data) => require("crypto").createHash("md5").update(data).digest("hex");

// Part 1
// ======

const part1 = (input) => {
    let output = 0;

    while (!md5(`${input}${output}`).startsWith("00000")) {
        output++;
    }

    return output;
};

// Part 2
// ======

const part2 = (input) => {
    let output = 0;

    while (!md5(`${input}${output}`).startsWith("000000")) {
        output++;
    }

    return output;
};

module.exports = { part1, part2 };
