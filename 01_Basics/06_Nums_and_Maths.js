const score = 400;
console.log(score); //400

const balance = new Number(100);
console.log(balance); //[object Number]
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.89786;
console.log(otherNumber.toPrecision(3)); //124

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN')); //1,00,00,000

// toString() converts a number to a string.
// toFixed(n) formats a number with exactly n decimal places.
// toPrecision(n) formats a number with n significant digits.
// toLocaleString(locale) formats a number with locale-specific separators.

//************************  Maths  ************************//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.7));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(10, 7, 8, 3));
console.log(Math.max(10, 7, 8, 3));

console.log(Math.random());
//The line console.log(Math.random()); generates a random floating-point
//number between 0 (inclusive) and 1 (exclusive) using the Math.random() method and logs it to the console.

console.log(Math.random() * 10 + 1);
//Output: A random number between 1 (inclusive) and 11 (exclusive)

console.log(Math.floor(Math.random() * 10) + 1);
// Output: A random integer between 1 and 10 (inclusive)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Math.random(): This method generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

// (max - min + 1): This calculates the range of possible values by subtracting the minimum from the maximum and adding 1.
//  In this case, it's (20 - 10 + 1), which equals 11.

// Math.random() * (max - min + 1): This expression generates a random floating-point number within the calculated range.

// Math.floor(...): This rounds down the generated floating-point number to the nearest integer,
// ensuring that the result is an integer.

// + min: Finally, the minimum value is added to the result to shift the range from [0, 10) to [10, 20].
//  The final result is an integer within the specified range

// --------------- Methods of Maths ------------------- //

// Math.abs(x): Returns the absolute value of x.
// console.log(Math.abs(-5)); // Output: 5

// Math.ceil(x): Rounds x up to the nearest integer.
// console.log(Math.ceil(4.3)); // Output: 5

// Math.floor(x): Rounds x down to the nearest integer.
// console.log(Math.floor(8.9)); // Output: 8

// Math.round(x): Rounds x to the nearest integer.
// console.log(Math.round(7.6)); // Output: 8

// Math.max(x1, x2, ..., xn): Returns the highest value among x1, x2, ..., xn.
// console.log(Math.max(2, 7, 5, 12, 8)); // Output: 12

// Math.min(x1, x2, ..., xn): Returns the lowest value among x1, x2, ..., xn.
// console.log(Math.min(2, 7, 5, 12, 8)); // Output: 2

// Math.random(): Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
// console.log(Math.random()); // Output: A random number between 0 and 1

// Math.pow(x, y): Returns x raised to the power of y.
// console.log(Math.pow(2, 3)); // Output: 8

// Math.sqrt(x): Returns the square root of x.
// console.log(Math.sqrt(25)); // Output: 5

// Math.sin(x), Math.cos(x), Math.tan(x): Trigonometric functions that calculate the sine, cosine,
// and tangent of an angle (in radians), respectively.
// let angle = Math.PI / 4; // 45 degrees in radians
// console.log(Math.sin(angle)); // Output: 0.7071
// console.log(Math.cos(angle)); // Output: 0.7071
// console.log(Math.tan(angle)); // Output: 1
