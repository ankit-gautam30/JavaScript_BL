// Get input from the command line
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node isPrime.js <number>");
    process.exit(1);
}

const num = parseInt(args[0], 10);

// Validate input
if (isNaN(num) || num < 2) {
    console.log("Please enter an integer greater than or equal to 2.");
    process.exit(1);
}

// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true; // 2 is the smallest prime number

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false; // Found a factor, not prime
        }
    }
    return true;
}

// Check and print result
if (isPrime(num)) {
    console.log(`${num} is a Prime Number.`);
} else {
    console.log(`${num} is NOT a Prime Number.`);
}
