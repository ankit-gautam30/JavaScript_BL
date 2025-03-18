function flipCoin() {
    return Math.random() < 0.5 ? "Heads" : "Tails";
}

// Initialize counters
let headsCount = 0;
let tailsCount = 0;
const winningScore = 11;

// Simulate coin flips until one reaches 11 wins
while (headsCount < winningScore && tailsCount < winningScore) {
    let result = flipCoin();
    
    if (result === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flip: ${result} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

// Announce the winner
if (headsCount === winningScore) {
    console.log("\nHeads wins 11 times! 🏆");
} else {
    console.log("\nTails wins 11 times! 🏆");
}
