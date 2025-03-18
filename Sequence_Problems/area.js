// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`42 inches = ${feet.toFixed(2)} feet`);

// b. Convert Rectangular Plot (60 feet x 40 feet) to meters
let lengthFeet = 60;
let widthFeet = 40;
let feetToMeters = 0.3048; // 1 foot = 0.3048 meters

let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
let areaMeters = lengthMeters * widthMeters;

console.log(`Rectangular Plot: ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);
console.log(`Area in square meters: ${areaMeters.toFixed(2)} m²`);

// c. Calculate area of 25 such plots in acres
let numPlots = 25;
let totalAreaMeters = areaMeters * numPlots;
let metersToAcres = 0.000247105; // 1 square meter = 0.000247105 acres
let totalAreaAcres = totalAreaMeters * metersToAcres;

console.log(`Total area of 25 plots in acres: ${totalAreaAcres.toFixed(4)} acres`);
