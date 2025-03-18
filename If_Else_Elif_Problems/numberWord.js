function numberToWord(number) {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

    if (number >= 0 && number <= 9) {
        console.log(words[number]);
    } else {
        console.log("Please enter a single-digit number (0-9).");
    }
}

// Get input from the command line
const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Usage: node script.js <single-digit-number>");
    process.exit(1);
}

const number = parseInt(args[0], 10);
numberToWord(number);
