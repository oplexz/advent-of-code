const input = "bgvyzdsv";

const md5 = (data) => require("crypto").createHash("md5").update(data).digest("hex");

let part1 = 0,
    part2;

while (!md5(`${input}${part1}`).startsWith("00000")) {
    part1++;
}

part2 = part1;

while (!md5(`${input}${part2}`).startsWith("000000")) {
    part2++;
}

console.log(part1, part2);
