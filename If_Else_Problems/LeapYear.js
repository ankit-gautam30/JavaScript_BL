function isLeapYear(year) {
    // Ensure it's a 4-digit number
    if (!/^\d{4}$/.test(year)) {
        console.log("Invalid input! Please enter a 4-digit year.");
        return;
    }

    year = parseInt(year, 10); // Convert input to number

    // Leap year conditions:
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is NOT a Leap Year");
    }
}

// Get year from command line
const args = process.argv.slice(2);
if (args.length < 1) {
    console.log("Usage: node script.js <year>");
    process.exit(1);
}

const year = args[0];
isLeapYear(year);
