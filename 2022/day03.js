"use strict";

const getPriority = (char) => {
    let priority;

    if (char == char.toUpperCase()) {
        priority = char.charCodeAt(0) - 38;
    } else {
        priority = char.charCodeAt(0) - 96;
    }

    return priority;
};

const breakArrayIntoGroups = (arr, size) => {
    let output = [],
        temp = [];

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        // Every n iterations, push array to groups and reset
        if ((i + 1) % size == 0) {
            output.push(temp);
            temp = [];
        }
    }

    return output;
};

// Part 1
// ======

const part1 = (input) => {
    input = input.split("\n").map((line) => [line.slice(0, line.length / 2), line.slice(line.length / 2)]);

    let sum = 0;

    input.forEach((cur) => {
        for (let i = 0; i < cur[0].length; i++) {
            let char = cur[0][i];

            if (cur[1].indexOf(char) > -1) {
                sum += getPriority(char);
                break;
            }
        }
    });

    return sum;
};

// Part 2
// ======

const part2 = (input) => {
    let groups = breakArrayIntoGroups(input.split("\n"), 3);

    let sum = 0;

    for (let i in groups) {
        let group = groups[i];

        for (let c = 0; c < group[0].length; c++) {
            if (group[1].indexOf(group[0][c]) > -1 && group[2].indexOf(group[0][c]) > -1) {
                sum += getPriority(group[0][c]);
                break;
            }
        }
    }

    return sum;
};

module.exports = { part1, part2 };
