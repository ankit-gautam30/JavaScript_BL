function isBetweenSpringEquinox(day, month) {
    // Convert month names to numbers (March = 3, June = 6)
    month = parseInt(month, 10);
    day = parseInt(day, 10);

    if (
        (month === 3 && day >= 20) || // March 20 or later
        (month > 3 && month < 6) ||   // Between April and May
        (month === 6 && day <= 20)    // June 20 or earlier
    ) {
        return true;
    }
    return false;
}

// Get command-line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Usage: node script.js <day> <month>");
    process.exit(1);
}

const day = args[0];
const month = args[1];

console.log(isBetweenSpringEquinox(day, month));
