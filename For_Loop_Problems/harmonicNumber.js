// Get input from the command line
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node harmonicNumber.js <n>");
    process.exit(1);
}

const n = parseInt(args[0], 10);

// Validate input
if (isNaN(n) || n <= 0) {
    console.log("Please enter a positive integer.");
    process.exit(1);
}

// Calculate nth harmonic number
let harmonic = 0;
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

console.log(`The ${n}th Harmonic Number is: ${harmonic.toFixed(6)}`);
