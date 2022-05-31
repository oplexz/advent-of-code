const input = require("fs").readFileSync("input.txt", "utf-8").trim().split("\n");

const wires = {};

function doOperation(str) {
    let [ins, out] = str.split(" -> ");

    const regex1 = /([a-z0-9]+) ([A-Z]+) ([a-z0-9]+)/; // a X b -> c
    const regex2 = /([A-Z]+) ([a-z0-9]+)/; // X a -> b
    const regex3 = /([a-z0-9]+)/; // a -> b

    console.log(str);

    if (regex1.test(ins)) {
        let [_, arg1, op, arg2] = ins.match(regex1);

        arg1 = +arg1 || arg1;
        arg2 = +arg2 || arg2;

        // console.log([arg1, op, arg2, out]);

        switch (op) {
            case "OR":
                break;

            case "AND":
                break;

            case "LSHIFT":
                break;

            case "RSHIFT":
                break;

            default:
                console.error("regex1: default switch state reached", str);
                process.exit();
        }
    } else if (regex2.test(ins)) {
        let [_, op, arg1] = ins.match(regex2);
        console.log([op, arg1, out]);
    } else if (regex3.test(ins)) {
        let [_, arg1] = ins.match(regex3);
        console.log([arg1, out]);
    } else {
        console.error("Input was not matched!", str);
        process.exit();
    }

    return [ins, out];
}

input.forEach((x) => doOperation(x));
