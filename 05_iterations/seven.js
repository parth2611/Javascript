// Short Notes on map and filter in JavaScript

// 1. map Method
// The map method creates a new array by calling a provided function on every element in the original array.

// Syntax: 
// const newArray = array.map(callback(currentValue, index, array));
// It returns a new array of the same length, but with transformed values based on the logic inside the function.

// Example: 
// const myNumers = [1, 2, 3, 4, 5];
// const newNums = myNumers.map((num) => num + 10);
// console.log(newNums); // [11, 12, 13, 14, 15]

// 2. Chaining map and filter Methods
// You can chain multiple map and filter methods together to perform transformations and filtering in sequence.

// Example: 
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumers
//     .map((num) => num * 10)  // Multiply each number by 10
//     .map((num) => num + 1)   // Add 1 to each number
//     .filter((num) => num >= 40); // Only keep numbers >= 40

// console.log(newNums); // [41, 51, 61, 71, 81, 91, 101, 111, 121, 131]

// Explanation:
// First, map((num) => num * 10) multiplies each number by 10, resulting in [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].
// Then, the second map((num) => num + 1) adds 1 to each number, resulting in [11, 21, 31, 41, 51, 61, 71, 81, 91, 101].
// Finally, filter((num) => num >= 40) filters out numbers less than 40, resulting in [41, 51, 61, 71, 81, 91, 101].


// 3. Key Points

// map:
// Used for transforming or modifying the elements of an array.
// Always returns a new array of the same size as the original array.

// filter:
// Used for filtering elements from an array based on a condition.
// Returns a new array containing only the elements that satisfy the condition.

// Chaining:
// Both map and filter can be chained together to perform multiple operations on an array in a sequence,
// making your code more concise and readable.