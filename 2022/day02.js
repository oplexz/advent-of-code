"use strict";

// Part 1
// ======

const part1 = (input) => {
    const play = (player1, player2) => {
        let score = 0;

        // Add points for playing rock, paper or scissors, respectively
        switch (player2) {
            case "X":
                score += 1;
                break;
            case "Y":
                score += 2;
                break;
            case "Z":
                score += 3;
                break;
        }

        // Add points for playing
        switch (player1) {
            case "A": // Rock
                switch (player2) {
                    case "X": // Rock
                        score += 3;
                        break;
                    case "Y": // Paper
                        score += 6;
                        break;
                    case "Z": // Scissors
                        score += 0;
                        break;
                }
                break;

            case "B": // Paper
                switch (player2) {
                    case "X": // Rock
                        score += 0;
                        break;
                    case "Y": // Paper
                        score += 3;
                        break;
                    case "Z": // Scissors
                        score += 6;
                        break;
                }
                break;

            case "C": // Scissors
                switch (player2) {
                    case "X": // Rock
                        score += 6;
                        break;
                    case "Y": // Paper
                        score += 0;
                        break;
                    case "Z": // Scissors
                        score += 3;
                        break;
                }
                break;
        }

        return score;
    };

    let rounds = input.split("\n").map((r) => r.split(" "));

    let total = 0;

    rounds.forEach((r) => (total += play(r[0], r[1])));

    let output = total;
    return output;
};

// Part 2
// ======

const part2 = (input) => {
    const play = (player1, outcome) => {
        let player2,
            score = 0;

        // Add points for playing
        switch (outcome) {
            case "X": // Lose
                score += 0;
                break;
            case "Y": // Draw
                score += 3;
                break;
            case "Z": // Win
                score += 6;
                break;
        }

        // Figure out what our move is
        switch (player1) {
            case "A": // Rock
                switch (outcome) {
                    case "X": // Lose
                        player2 = "S";
                        break;
                    case "Y": // Draw
                        player2 = "R";
                        break;
                    case "Z": // Win
                        player2 = "P";
                        break;
                }
                break;

            case "B": // Paper
                switch (outcome) {
                    case "X": // Lose
                        player2 = "R";
                        break;
                    case "Y": // Draw
                        player2 = "P";
                        break;
                    case "Z": // Win
                        player2 = "S";
                        break;
                }
                break;

            case "C": // Scissors
                switch (outcome) {
                    case "X": // Lose
                        player2 = "P";
                        break;
                    case "Y": // Draw
                        player2 = "S";
                        break;
                    case "Z": // Win
                        player2 = "R";
                        break;
                }
                break;
        }

        // Add points for playing rock, paper or scissors, respectively
        switch (player2) {
            case "R":
                score += 1;
                break;
            case "P":
                score += 2;
                break;
            case "S":
                score += 3;
                break;
        }

        return score;
    };

    let rounds = input.split("\n").map((r) => r.split(" "));

    let total = 0;

    rounds.forEach((r) => (total += play(r[0], r[1])));

    let output = total;
    return output;
};

module.exports = { part1, part2 };
