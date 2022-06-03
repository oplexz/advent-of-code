"use strict";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function nextPassword(input) {
    function nextAlphabetChar(char) {
        return alphabet[alphabet.indexOf(char) + 1];
    }

    let next = input.split("").reverse();

    if (next[0] == "z") {
        next[0] = "a";

        for (let i = 1; i < next.length; i++) {
            if (next[i] == "z") {
                next[i] = "a";
            } else {
                next[i] = nextAlphabetChar(next[i]);
                break;
            }
        }
    } else {
        next[0] = nextAlphabetChar(next[0]);
    }

    let output = next.reverse().join("");

    return output;
}

// Part 1
// =====

function hasTriples(str) {
    const arr = (function () {
        let output = [];

        for (let i = 0; i < alphabet.length - 2; i++) {
            output.push(alphabet.slice(i, i + 3));
        }

        return output;
    })();

    let good = false;

    for (let i in arr) {
        if (str.indexOf(arr[i]) > 0) {
            good = true;
            break;
        }
    }

    return good;
}

function doesntHaveBadLetters(str) {
    const arr = ["i", "o", "l"];

    let good = true;

    for (let i in arr) {
        if (str.indexOf(arr[i]) > 0) {
            good = false;
            break;
        }
    }

    return good;
}

function hasPairs(str) {
    let good = false,
        found_pairs_indices = [];

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == str[i + 1] && !found_pairs_indices.includes(i - 1)) {
            found_pairs_indices.push(i);
        }
        if (found_pairs_indices.length >= 2) {
            good = true;
            break;
        }
    }

    return good;
}

function nextGoodPassword(input) {
    let password = input;

    while (!(doesntHaveBadLetters(password) && hasTriples(password) && hasPairs(password)))
        password = nextPassword(password);

    return password;
}

const part1 = (input) => {
    let output = nextGoodPassword(input);

    return output;
};

// Part 2
// ======

const part2 = (input) => {
    let p1_password = part1(input);
    let p2_password = nextPassword(p1_password);

    let output = nextGoodPassword(p2_password);

    return output;
};

module.exports = { part1, part2 };
