"use strict";

function splitRecurringParts(input) {
    let prev = input[0],
        len = 1,
        output = [];

    for (let i = 1; i <= input.length; i++) {
        if (input[i] != prev) {
            output.push(prev.repeat(len));
            prev = input[i];
            len = 1;
        } else {
            len++;
        }
    }

    return output;
}

function lookAndSay(str) {
    return splitRecurringParts(str)
        .map((str) => {
            return `${str.length}${str[0]}`;
        })
        .join("");
}

// Part 1
// ======

const part1 = (input) => {
    let tmp = input,
        output;

    for (let i = 0; i < 40; i++) tmp = lookAndSay(tmp);

    output = tmp.length;

    return output;
};

// Part 2
// ======

const part2 = (input) => {
    let tmp = input,
        output;

    for (let i = 0; i < 50; i++) tmp = lookAndSay(tmp);

    output = tmp.length;

    return output;
};

module.exports = { part1, part2 };
