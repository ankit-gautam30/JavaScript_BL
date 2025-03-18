function getPlaceValue(number) {
    const placeValues = {
        1: "Unit",
        10: "Ten",
        100: "Hundred",
        1000: "Thousand",
        10000: "Ten Thousand",
        100000: "Lakh",
        1000000: "Ten Lakh",
        10000000: "Crore"
    };

    if (placeValues[number]) {
        console.log(placeValues[number]);
    } else {
        console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
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
