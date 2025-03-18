// Get input from the command line
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node primeFactors.js <number>");
    process.exit(1);
}

let num = parseInt(args[0], 10);

// Validate input
if (isNaN(num) || num < 2) {
    console.log("Please enter an integer greater than or equal to 2.");
    process.exit(1);
}

// Function to compute prime factors
function primeFactors(n) {
    let factors = [];

    // Check for divisibility by 2 and divide n until it's odd
    while (n % 2 === 0) {
        factors.push(2);
        n = Math.floor(n / 2);
    }

    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = Math.floor(n / i);
        }
    }

    // If n is still greater than 2, then it's a prime number itself
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Compute and print prime factors
const factors = primeFactors(num);
console.log(`Prime factors of ${num}: ${factors.join(" ")}`);
