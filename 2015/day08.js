"use strict";

// Part 1
// ======

const part1 = (input) => {
    input = input.split("\n");

    let counter1 = 0,
        counter2 = 0;

    for (let i = 0; i < input.length; i++) {
        const line = input[i];

        counter1 += line.length;
        counter2 += eval(line).length;
    }

    let output = counter1 - counter2;

    console.log(output);
};

// Part 2
// ======

const part2 = (input) => {
    input = input.split("\n");

    let counter1 = 0,
        counter2 = 0;

    for (let i = 0; i < input.length; i++) {
        const line = input[i];

        counter1 += 2; // Double quotes in the beginning and the end of each string

        for (let j = 0; j < line.length; j++) {
            if (/\W/.test(line[j])) counter1 += 2;
            else counter1 += 1;
        }

        counter2 += line.length;
    }

    let output = counter1 - counter2;

    return output;
};

module.exports = { part1, part2 };
