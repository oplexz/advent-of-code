"use strict";

let wires = {};

// Helpers

function isNumber(value) {
    return typeof value === "number" && isFinite(value);
}

function isWireDefined(value) {
    return wires.hasOwnProperty(value);
}

function getArgs(str, regex) {
    let matched = str.match(regex),
        out = [];

    for (let i = 1; i < matched.length; i++) {
        let str = matched[i];
        let n = parseInt(str);

        if (isNaN(n)) out.push(str);
        else out.push(n);
    }

    return out;
}

function resolveValues(arg1, arg2) {
    if (typeof arg2 === "undefined") {
        if (isNumber(arg1)) return [arg1];
        else if (isWireDefined(arg1)) return [wires[arg1]];
        else return false;
    } else {
        if (isNumber(arg1) && isWireDefined(arg2)) return [arg1, wires[arg2]];
        else if (isWireDefined(arg1) && isNumber(arg2)) return [wires[arg1], arg2];
        else if (isWireDefined(arg1) && isWireDefined(arg2)) return [wires[arg1], wires[arg2]];
        else return false;
    }
}

// Main

function doOperation(str) {
    let [ins, out] = str.split(" -> ");

    if (isWireDefined(out)) return; // avoid finding wires more than once

    const regex1 = /([a-z0-9]+) ([A-Z]+) ([a-z0-9]+)/; // a X b -> c
    const regex2 = /([A-Z]+) ([a-z0-9]+)/; // X a -> b
    const regex3 = /([a-z0-9]+)/; // a -> b

    if (regex1.test(ins)) {
        let [arg1, op, arg2] = getArgs(ins, regex1);

        let values = resolveValues(arg1, arg2);

        if (!values) return;

        switch (op) {
            case "OR":
                wires[out] = values[0] | values[1];
                break;

            case "AND":
                wires[out] = values[0] & values[1];
                break;

            case "LSHIFT":
                wires[out] = values[0] << values[1];
                break;

            case "RSHIFT":
                wires[out] = values[0] >> values[1];
                break;

            default:
                console.error("regex1: default switch state reached", str);
                process.exit();
        }
    } else if (regex2.test(ins)) {
        let [op, arg1] = getArgs(ins, regex2);
        let values = resolveValues(arg1);

        if (!values) return;

        switch (op) {
            case "NOT":
                wires[out] = ~values[0];
                break;

            default:
                console.error("regex2: default switch state reached", str);
                process.exit();
        }
    } else if (regex3.test(ins)) {
        let [arg1] = getArgs(ins, regex3);
        let values = resolveValues(arg1);

        if (!values) return;

        wires[out] = values[0];
    } else {
        console.error("Input was not matched!", str);
        process.exit();
    }
}

// Part 1
// ======

const part1 = (input) => {
    input = input.split("\n");

    while (!isWireDefined("a")) {
        input.forEach((x) => doOperation(x));
    }

    let output = wires["a"];

    return output;
};

// Part 2
// ======

const part2 = (input) => {
    wires = { b: part1(input) };

    input = input.split("\n");

    while (!isWireDefined("a")) {
        input.forEach((x) => doOperation(x));
    }

    let output = wires["a"];

    return output;
};

module.exports = { part1, part2 };
