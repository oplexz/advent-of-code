"use strict";

let sum = 0;

function search(input, part2 = false) {
    let target;

    if (Array.isArray(input)) {
        target = input;
    } else {
        target = Object.values(input);
        if (part2 && target.includes("red")) return;
    }

    for (let i = 0; i < target.length; i++) {
        let el = target[i];

        switch (typeof el) {
            case "string":
                break;

            case "number":
                sum += el;
                break;

            case "object":
                search(el, part2);
                break;
        }
    }
}

// Part 1
// ======

const part1 = (input) => {
    input = JSON.parse(input);

    search(input);

    let output = sum;

    return output;
};

// Part 2
// ======

const part2 = (input) => {
    input = JSON.parse(input);

    search(input, true);

    let output = sum;

    return output;
};

module.exports = { part1, part2 };
