const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Ask user for conversion choice
console.log("Temperature Conversion:");
console.log("1. Convert Celsius to Fahrenheit");
console.log("2. Convert Fahrenheit to Celsius");

rl.question("Enter your choice (1 or 2): ", (choice) => {
    switch (choice) {
        case "1":
            rl.question("Enter temperature in Celsius (0°C to 100°C): ", (degC) => {
                degC = parseFloat(degC);
                if (degC >= 0 && degC <= 100) {
                    console.log(`${degC}°C = ${celsiusToFahrenheit(degC).toFixed(2)}°F`);
                } else {
                    console.log("Invalid input! Temperature must be between 0°C and 100°C.");
                }
                rl.close();
            });
            break;

        case "2":
            rl.question("Enter temperature in Fahrenheit (32°F to 212°F): ", (degF) => {
                degF = parseFloat(degF);
                if (degF >= 32 && degF <= 212) {
                    console.log(`${degF}°F = ${fahrenheitToCelsius(degF).toFixed(2)}°C`);
                } else {
                    console.log("Invalid input! Temperature must be between 32°F and 212°F.");
                }
                rl.close();
            });
            break;

        default:
            console.log("Invalid choice! Please enter 1 or 2.");
            rl.close();
            break;
    }
});
