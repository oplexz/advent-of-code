const input = require("fs").readFileSync("input.txt", "utf-8").trim().split("\n");

let part1 = 0,
    part2 = 0;

let wires = {};

function doOperation(str) {
    let [ins, out] = str.split(" -> ");

    if (wires.hasOwnProperty(out)) return; // avoid finding wires more than once

    const regex1 = /([a-z0-9]+) ([A-Z]+) ([a-z0-9]+)/; // a X b -> c
    const regex2 = /([A-Z]+) ([a-z0-9]+)/; // X a -> b
    const regex3 = /([a-z0-9]+)/; // a -> b

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

    if (regex1.test(ins)) {
        let [arg1, op, arg2] = getArgs(ins, regex1);

        switch (op) {
            case "OR":
                if (typeof arg1 == "number" && wires.hasOwnProperty(arg2)) wires[out] = arg1 | wires[arg2];
                else if (wires.hasOwnProperty(arg1) && typeof arg2 == "number") wires[out] = wires[arg1] | arg2;
                else if (wires.hasOwnProperty(arg1) && wires.hasOwnProperty(arg2))
                    wires[out] = wires[arg1] | wires[arg2];
                break;

            case "AND":
                if (typeof arg1 == "number" && wires.hasOwnProperty(arg2)) wires[out] = arg1 & wires[arg2];
                else if (wires.hasOwnProperty(arg1) && typeof arg2 == "number") wires[out] = wires[arg1] & arg2;
                else if (wires.hasOwnProperty(arg1) && wires.hasOwnProperty(arg2))
                    wires[out] = wires[arg1] & wires[arg2];
                break;

            case "LSHIFT":
                if (typeof arg1 == "number" && wires.hasOwnProperty(arg2)) wires[out] = arg1 << wires[arg2];
                else if (wires.hasOwnProperty(arg1) && typeof arg2 == "number") wires[out] = wires[arg1] << arg2;
                else if (wires.hasOwnProperty(arg1) && wires.hasOwnProperty(arg2))
                    wires[out] = wires[arg1] << wires[arg2];
                break;

            case "RSHIFT":
                if (typeof arg1 == "number" && wires.hasOwnProperty(arg2)) wires[out] = arg1 >> wires[arg2];
                else if (wires.hasOwnProperty(arg1) && typeof arg2 == "number") wires[out] = wires[arg1] >> arg2;
                else if (wires.hasOwnProperty(arg1) && wires.hasOwnProperty(arg2))
                    wires[out] = wires[arg1] >> wires[arg2];
                break;

            default:
                console.error("regex1: default switch state reached", str);
                process.exit();
        }
    } else if (regex2.test(ins)) {
        let [op, arg1] = getArgs(ins, regex2);

        switch (op) {
            case "NOT":
                if (wires.hasOwnProperty(arg1)) wires[out] = ~wires[arg1];
                break;

            default:
                console.error("regex2: default switch state reached", str);
                process.exit();
        }
    } else if (regex3.test(ins)) {
        let [arg1] = getArgs(ins, regex3);

        if (typeof arg1 == "number") wires[out] = arg1;
        else if (wires.hasOwnProperty(arg1)) wires[out] = wires[arg1];
    } else {
        console.error("Input was not matched!", str);
        process.exit();
    }
}

while (!wires.hasOwnProperty("a")) {
    input.forEach((x) => doOperation(x));
}

part1 = wires["a"];

console.log(part1, part2);
