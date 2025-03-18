function gamble() {
    let money = 100; // Starting money
    const goal = 200; // Goal amount
    let bets = 0; // Total bets made
    let wins = 0; // Total wins

    while (money > 0 && money < goal) {
        bets++; // Increment bet count

        // Simulate a bet: 50% chance to win or lose
        if (Math.random() < 0.5) {
            money++; // Win Rs 1
            wins++;
        } else {
            money--; // Lose Rs 1
        }

        console.log(`Bet ${bets}: Money = Rs ${money}`);
    }

    // Display results
    console.log("\nGame Over!");
    if (money === goal) {
        console.log("Congratulations! You reached your goal of Rs 200! 🎉");
    } else {
        console.log("You went broke. Better luck next time! 😞");
    }

    console.log(`Total Bets: ${bets}`);
    console.log(`Total Wins: ${wins}`);
}

// Start the game
gamble();
