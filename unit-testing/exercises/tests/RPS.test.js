const whoWon = require('../RPS.js');

describe("whoWon", function () {
    test("should return 'TIE' if P1 = P2", function() {
        let output = whoWon("rock", "rock" || "scissor", "scissor" || "paper", "paper");
        expect(output).toBe("TIE!");
    });

    test("should return 'Player 2 wins!' if P1 = 'rock' and P2 = 'paper'", function() {
        let output =whoWon("rock", "paper");
        expect(output).toBe("Player 2 wins!");
    });

    test("should return 'Player 2 wins!' if P1 = 'paper' and P2 = 'scissors'", function() {
        let output =whoWon("paper", "scissors");
        expect(output).toBe("Player 2 wins!");
    });

    test("should return 'Player 2 wins!' if P1 = 'scissors' and P2 = 'rock'", function() {
        let output =whoWon("scissors", "rock");
        expect(output).toBe("Player 2 wins!");
    });

    test("should return 'Player 1 wins!' if P1 = 'rock' and P2 = 'paper'", function() {
        let output =whoWon("rock", "paper");
        expect(output).toBe("Player 2 wins!");
    });
});