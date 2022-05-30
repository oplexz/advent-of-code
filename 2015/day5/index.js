const input = require("fs").readFileSync("input.txt", "utf-8");

/*
    It contains at least three vowels
    It contains at least one letter that appears twice in a row (xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd))
    It does not contain the strings ab, cd, pq, or xy
*/

function checkForBannedStings(str) {
    const banned_strings = ["ab", "cd", "pq", "xy"];

    let local_good = true;

    for (let i = 0; i < banned_strings.length; i++) {
        if (str.indexOf(banned_strings[i]) > 0) {
            local_good = false;
            break;
        }
    }

    return local_good;
}

const part1_check = (str) => {
    const vowels = "aeiou".split("");

    let good = true;

    checkForBannedStings(str);

    return good;
};

console.log(checkForBannedStings("xy") ? "OK" : "NG");
