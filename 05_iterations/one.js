// 1. Basic for Loop Structure

// A for loop allows you to repeat a block of code a specified number of times.
// Syntax:

// for (initialization; condition; increment) {
//     // Code to execute
// }

// Example:

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element); // Logs numbers from 0 to 10.
// }

// Key Points:
// The variable i is incremented after each loop iteration.
// The loop stops when the condition (i <= 10) is no longer true.

// 2. Nested for Loops

// A for loop inside another loop is called a nested loop.
// Useful for operations involving grids or tables (e.g., multiplication tables).

// Example:

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`); // Outputs multiplication table.
//     }
// }

// 3. Iterating Through Arrays

// Use a for loop to iterate through an array by accessing its indices.

// Example:

// let myArray = ["flash", "batman", "superman"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element); // Logs "flash", "batman", "superman".
// }

// 4. break Statement
// Exits the loop entirely when the condition is met.

// Example:

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break; // Stops the loop.
//     }
//     console.log(`Value of i is ${index}`);
// }

// Output:

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5

// 5. continue Statement
// Skips the current iteration and moves to the next one.

// Example:

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         continue; // Skips logging for index 5.
//     }
//     console.log(`Value of i is ${index}`);
// }

// Output:

// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5
// Value of i is 6
// ...

// 6. Key Points to Remember
// Scope: Variables declared with let inside a loop are block-scoped.
// Example: Accessing i outside the loop will result in an error.
// Efficiency: Avoid deeply nested loops when possible for better performance.
// Iterating Arrays: Use .length to prevent out-of-bound errors.

// break and continue:
// break: Stops the loop entirely.
// continue: Skips the current iteration and proceeds with the next one.
