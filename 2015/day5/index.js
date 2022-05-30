const input = require("fs").readFileSync("input.txt", "utf-8").split("\n");
input.pop();

/*
    Part 1:

    It contains at least three vowels
    It contains at least one letter that appears twice in a row (xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd))
    It does not contain the strings ab, cd, pq, or xy
*/

function part1_check(str) {
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

    return checkForBannedStings(str) && checkForVowels(str) && checkForDoubleLetters(str);
}

/*
    Part 2:

    It contains a pair of any two letters that appears at least
    twice in the string without overlapping, like xyxy (xy) or
    aabcdefgaa (aa), but not like aaa (aa, but it overlaps).

    It contains at least one letter which repeats with exactly one
    letter between them, like xyx, abcdefeghi (efe), or even aaa.
*/

function part2_check(str) {
    // Could've been combined into a single for-loop,
    // but I went with pretty code instead

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

    return checkForPairsOfLetters(str) && checkForRepeatingLetterWithADelimiter(str);
}

let part1 = 0,
    part2 = 0;

for (let i = 0; i < input.length; i++) {
    const str = input[i];
    if (part1_check(str)) part1++;
    if (part2_check(str)) part2++;
}

console.log(part1, part2);
