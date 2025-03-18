function flipCoin() {
    // Generate a random number: 0 or 1
    let result = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log(result);
}

// Call the function to simulate the coin flip
flipCoin();
