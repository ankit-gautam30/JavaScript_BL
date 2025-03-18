function findMaxMin(a, b, c) {
    // Perform the four arithmetic operations
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    // Store results in an array
    let results = [result1, result2, result3, result4];

    // Find the maximum and minimum values
    let maxValue = Math.max(...results);
    let minValue = Math.min(...results);

    // Print the results
    console.log(`Results of operations:`);
    console.log(`1. a + b * c = ${result1}`);
    console.log(`2. a % b + c = ${result2}`);
    console.log(`3. c + a / b = ${result3}`);
    console.log(`4. a * b + c = ${result4}`);
    console.log(`Maximum Value: ${maxValue}`);
    console.log(`Minimum Value: ${minValue}`);
}

// Get input from command line
const args = process.argv.slice(2);
if (args.length < 3) {
    console.log("Usage: node script.js <a> <b> <c>");
    process.exit(1);
}

// Convert inputs to numbers
const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const c = parseFloat(args[2]);

findMaxMin(a, b, c);
