// 1. while Loop

// Repeats a block of code as long as the condition is true.
// Syntax:

// while (condition) {
//     // Code to execute
// }

// Example:

// let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2; // Increments index by 2 each iteration.
// }

// Key Points:
// The condition is checked before the loop executes.
// If the condition is initially false, the loop will not run at all.

// 2. Iterating Through Arrays with while
// A while loop can iterate through arrays based on their length.

// Example:

// let myArray = ['flash', 'batman', 'superman'];
// let arr = 0;
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`); // Logs array elements.
//     arr = arr + 1; // Moves to the next index.
// }

// Output:

// Value is flash
// Value is batman
// Value is superman

// 3. do-while Loop
// Executes the code block at least once, and then repeats as long as the condition is true.
// Syntax:

// do {
//     // Code to execute
// } while (condition);

// Example:

// let score = 11;
// do {
//     console.log(`Score is ${score}`); // Logs the score.
//     score++; // Increments score.
// } while (score <= 10);

// Key Points:
// The code block runs once before checking the condition.
// Useful when the loop body must execute at least once regardless of the condition.

// 4. Comparison Between while and do-while

// Feature     	       while Loop	                                                     do-while Loop

// Condition Check	    Before the loop body executes.	                                After the loop body executes.
// Minimum Execution	May not run if the condition is false.	                        Runs at least once, even if the condition is false.
// Use Case	            When you want the loop to execute only if the condition is met.	    When the loop body must run at least once.

// 5. Key Points to Remember
// Infinite Loops: Ensure the condition eventually becomes false to avoid infinite loops.

// // Example of an infinite loop (Avoid this)
// let i = 0;
// while (true) {
//     console.log(i);
//     i++;
// }

// Use Cases:
// while: When the number of iterations is unknown but depends on a condition.
// do-while: When the loop must run at least once.
