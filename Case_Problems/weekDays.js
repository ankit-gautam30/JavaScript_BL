function getWeekday(number) {
    switch (number) {
        case 1: console.log("Sunday"); break;
        case 2: console.log("Monday"); break;
        case 3: console.log("Tuesday"); break;
        case 4: console.log("Wednesday"); break;
        case 5: console.log("Thursday"); break;
        case 6: console.log("Friday"); break;
        case 7: console.log("Saturday"); break;
        default: console.log("Please enter a number between 1 and 7.");
    }
}

// Get input from the command line
const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Usage: node script.js <number between 1-7>");
    process.exit(1);
}

const number = parseInt(args[0], 10);
getWeekday(number);
