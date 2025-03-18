const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the magic number using binary search
function findMagicNumber(low, high) {
    if (low > high) {
        console.log("Something went wrong! Please restart the game.");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes/no) `, (answer) => {
        if (answer.toLowerCase() === "yes") {
            console.log(`Great! Your magic number is ${mid}. 🎉`);
            rl.close();
        } else {
            rl.question(`Is your number greater than ${mid}? (yes/no) `, (greater) => {
                if (greater.toLowerCase() === "yes") {
                    findMagicNumber(mid + 1, high);
                } else {
                    findMagicNumber(low, mid - 1);
                }
            });
        }
    });
}

// Start the game
console.log("Think of a number between 1 and 100, and I'll guess it!");
findMagicNumber(1, 100);
