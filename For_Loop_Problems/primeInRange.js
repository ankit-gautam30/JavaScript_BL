// Get input from the command line
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Usage: node primeInRange.js <start> <end>");
    process.exit(1);
}

const start = parseInt(args[0], 10);
const end = parseInt(args[1], 10);

// Validate input
if (isNaN(start) || isNaN(end) || start < 2 || end < start) {
    console.log("Please enter valid numbers where start >= 2 and end >= start.");
    process.exit(1);
}

// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true; // 2 is a prime number

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false; // Found a factor, not prime
        }
    }
    return true;
}

// Function to print prime numbers in the given range
function printPrimesInRange(start, end) {
    console.log(`Prime numbers between ${start} and ${end}:`);
    let found = false;

    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            process.stdout.write(num + " "); // Print primes in one line
            found = true;
        }
    }

    if (!found) {
        console.log("No prime numbers found in this range.");
    } else {
        console.log(); // Print a new line after the output
    }
}

// Run the function
printPrimesInRange(start, end);
