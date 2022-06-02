"use strict";

// Part 1
// ======

function checkForBannedStings(str) {
    const banned_strings = ["ab", "cd", "pq", "xy"];

    let good = true;

    for (let i = 0; i < banned_strings.length; i++) {
        if (str.indexOf(banned_strings[i]) >= 0) {
            good = false;
            break;
        }
    }

    return good;
}

function checkForVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let matches = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (vowels.includes(char)) matches++;
    }

    return matches >= 3;
}

function checkForDoubleLetters(str) {
    let good = false;

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] == str[i + 1]) {
            good = true;
            break;
        }
    }

    return good;
}

const part1 = (input) => {
    input = input.split("\n");

    let output = 0;

    for (let i = 0; i < input.length; i++) {
        const string = input[i];
        if (checkForBannedStings(string) && checkForVowels(string) && checkForDoubleLetters(string)) output++;
    }

    return output;
};

// Part 2
// ======

function checkForPairsOfLetters(str) {
    let good = false;

    for (let i = 0; i < str.length - 2; i++) {
        if (str.match(new RegExp(str[i] + str[i + 1], "g")).length > 1) {
            good = true;
            break;
        }
    }

    return good;
}

// Yes.
function checkForRepeatingLetterWithADelimiter(str) {
    let good = false;

    for (let i = 0; i < str.length - 2; i++) {
        if (str[i] == str[i + 2]) {
            good = true;
            break;
        }
    }

    return good;
}

const part2 = (input) => {
    input = input.split("\n");

    let output = 0;

    for (let i = 0; i < input.length; i++) {
        const string = input[i];
        if (checkForPairsOfLetters(string) && checkForRepeatingLetterWithADelimiter(string)) output++;
    }

    return output;
};

module.exports = { part1, part2 };
