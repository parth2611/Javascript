// // 1. Introduction to Conditional Statements
// // The code demonstrates the use of if, else, and else if constructs to implement decision-making logic.
// // It highlights comparison operators (<, >, <=, >=, ==, !=, ===, !==) and their applications.

// 2. Temperature Check Logic

// const isUserloggedIn = true;
// const temperature = 41;

// Initializes a boolean variable (isUserloggedIn) and a numeric variable (temperature).
// The commented-out code checks if the temperature is exactly 40 and logs a corresponding message.
// Key takeaway: Use strict equality (===) to ensure type safety.

// 3. Score Check and Block Scoping

// const score = 200;

// if (score > 100) {
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// Checks if the score is greater than 100.
// If true, it defines and logs the variable power.
// Demonstrates block scoping with let. 
// Variables defined inside an if block are not accessible outside it.
// Output: The last line throws an error because power is not defined globally

// 4. Balance Check with Compact Syntax

// const balance = 1000;

// if (balance > 500) console.log("test"), console.log("test2");

// Uses a compact if statement without braces for single-line execution.
// Comma-separated expressions within the same line are executed sequentially.

// 5. Nested else if for Balance Ranges

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

// Evaluates balance in different ranges using else if.
// Logic flaw: The second and third conditions output the same message ("less than 750").

// 6. Logical Operators (&& and ||)

// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if (userLoggedIn && debitCard && 2 == 3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }


// Demonstrates:
// AND (&&): Executes only if all conditions are true.
// OR (||): Executes if at least one condition is true.

// Example:
// First if statement doesn't execute because 2 == 3 is false.
// Second if statement logs "User logged in" since one condition (loggedInFromEmail) is true.

