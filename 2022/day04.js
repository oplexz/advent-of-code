"use strict";

// Part 1
// ======

const part1 = (input) => {
    input = input.split("\n");

    let sum = 0;

    for (let i in input) {
        let arr = [];

        input[i].split(",").forEach((double) => {
            double
                .split("-")
                .map((n) => parseInt(n))
                .forEach((n) => arr.push(n));
        });

        console.log(arr);

        if ((arr[0] <= arr[2] && arr[1] >= arr[3]) || (arr[2] <= arr[0] && arr[3] >= arr[1])) sum++;
    }

    return sum;
};

// Part 2
// ======

const part2 = (input) => {
    input = input.split("\n");

    let sum = 0;

    for (let i in input) {
        let arr = [];

        input[i].split(",").forEach((double) => {
            double
                .split("-")
                .map((n) => parseInt(n))
                .forEach((n) => arr.push(n));
        });

        if (arr[1] < arr[2] || arr[0] > arr[3]) continue;
        sum++;
    }

    return sum;
};

module.exports = { part1, part2 };
