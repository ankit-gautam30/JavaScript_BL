// Get input from the command line
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node factorial.js <number>");
    process.exit(1);
}

const num = parseInt(args[0], 10);

// Validate input
if (isNaN(num) || num < 0) {
    console.log("Please enter a non-negative integer.");
    process.exit(1);
}

// Function to compute factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Compute and print factorial
console.log(`${num}! = ${factorial(num)}`);
