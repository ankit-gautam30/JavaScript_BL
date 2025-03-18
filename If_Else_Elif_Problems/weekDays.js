function getWeekday(number) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (number >= 1 && number <= 7) {
        console.log(weekdays[number - 1]); // Adjust index since array is 0-based
    } else {
        console.log("Please enter a number between 1 and 7.");
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
