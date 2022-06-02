"use strict";

// Part 1
// ======

const part1 = (input) => {
    const directions = input.split("");

    let x = 0,
        y = 0;

    let visited_coords = ["0;0"]; // There is always a gift at initial coordinates

    directions.forEach((dir) => {
        let delta_x = 0,
            delta_y = 0;

        switch (dir) {
            case ">":
                delta_x = 1;
                break;

            case "v":
                delta_y = 1;
                break;

            case "<":
                delta_x = -1;
                break;

            case "^":
                delta_y = -1;
                break;
        }

        x += delta_x;
        y += delta_y;

        let pos = `${x};${y}`;
        if (!visited_coords.includes(pos)) visited_coords.push(pos);
    });

    let output = visited_coords.length;

    return output;
};

// Part 2
// ======

const part2 = (input) => {
    const directions = input.split("");

    let x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0;

    let visited_coords = ["0;0"]; // There is always a gift at initial coordinates

    let santa_turn = true;

    directions.forEach((dir) => {
        let delta_x = 0,
            delta_y = 0;

        switch (dir) {
            case ">":
                delta_x = 1;
                break;

            case "v":
                delta_y = 1;
                break;

            case "<":
                delta_x = -1;
                break;

            case "^":
                delta_y = -1;
                break;
        }

        let pos;

        if (santa_turn) {
            x1 += delta_x;
            y1 += delta_y;

            pos = `${x1};${y1}`;

            santa_turn = false;
        } else {
            x2 += delta_x;
            y2 += delta_y;

            pos = `${x2};${y2}`;

            santa_turn = true;
        }

        if (!visited_coords.includes(pos)) visited_coords.push(pos);
    });

    let output = visited_coords.length;

    return output;
};

module.exports = { part1, part2 };
