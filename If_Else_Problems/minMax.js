function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100; // Generates a number between 100 and 999
}

function findMinMax() {
    let numbers = Array.from({ length: 5 }, getRandomThreeDigitNumber);
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);

    console.log("Generated Numbers:", numbers);
    console.log("Minimum Value:", min);
    console.log("Maximum Value:", max);
}

findMinMax();