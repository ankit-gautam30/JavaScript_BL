// Get input from the command line
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: node powerOf2.js <n>");
    process.exit(1);
}

const n = parseInt(args[0], 10);

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please enter a non-negative integer.");
    process.exit(1);
}

// Function to print powers of 2
function printPowersOf2(n) {
    let power = 1; // 2^0 = 1
    let i = 0;

    console.log(`Table of Powers of 2 up to 2^${n} (max 256):`);
    while (i <= n && power <= 256) {
        console.log(`2^${i} = ${power}`);
        power *= 2; // Calculate the next power of 2
        i++;
    }
}

// Call the function
printPowersOf2(n);
