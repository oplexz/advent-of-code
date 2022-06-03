"use strict";

const regex = /(\w+) to (\w+) = (\d+)/;

// Part 1
// ======

const part1 = (input) => {
    input = input.split("\n");

    let map = {},
        cities = [];

    for (let i = 0; i < input.length; i++) {
        const [_, city1, city2, distance] = input[i].match(regex);

        if (!map.hasOwnProperty(city1)) map[city1] = {};

        if (!cities.includes(city1)) cities.push(city1);
        if (!cities.includes(city2)) cities.push(city2);

        map[city1][city2] = parseInt(distance);
    }

    return cities;
};

// Part 2
// ======

const part2 = (input) => {
    return input;
};

module.exports = { part1, part2 };
