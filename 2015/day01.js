"use strict";

// Part 1
// ======

const part1 = (input) => {
    let output,
        position = 0;

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "(":
                position++;
                break;

            case ")":
                position--;
                break;
        }
    }

    output = position;

    return output;
};

// Part 2
// ======

const part2 = (input) => {
    let output,
        position = 0;

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case "(":
                position++;
                break;

            case ")":
                position--;
                break;
        }

        if (position < 0) {
            output = i + 1; // First character index is 1
            break;
        }
    }

    return output;
};

module.exports = { part1, part2 };
