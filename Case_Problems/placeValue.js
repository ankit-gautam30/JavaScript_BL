function getPlaceValue(number) {
    switch (number) {
        case 1: console.log("Unit"); break;
        case 10: console.log("Ten"); break;
        case 100: console.log("Hundred"); break;
        case 1000: console.log("Thousand"); break;
        case 10000: console.log("Ten Thousand"); break;
        case 100000: console.log("Lakh"); break;
        case 1000000: console.log("Ten Lakh"); break;
        case 10000000: console.log("Crore"); break;
        default: console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
    }
}

// Get input from the command line
const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Usage: node script.js <number>");
    process.exit(1);
}

const number = parseInt(args[0], 10);
getPlaceValue(number);
