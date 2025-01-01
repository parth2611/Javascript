// 1. Falsy Values
// Certain values are considered "falsy" in JavaScript,
// meaning they evaluate to false in a boolean context.

// 1. Falsy Values:
// false,
// 0,
// -0,
// BigInt(0n),
// "" (empty string),
// null,
// undefined,
// NaN.

// const userEmail = [];
// if (userEmail) {
//     console.log("Got user email"); // Doesn't execute because an empty array is truthy but doesn't provide meaningful data.
// } else {
//     console.log("Don't have user email"); // Executes.
// }

// 2. Truthy Values
// Any value not in the list of falsy values is considered truthy.

// Truthy Examples:
// "0",
// 'false',
// " " (space string),
// [] (empty array),
// {} (empty object),
// function(){}.

// 3. Checking Empty Structures
// Use specific checks for empty arrays or objects.

// Example for Empty Array:
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// Example for Empty Object:
// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty"); // Executes since `emptyObj` has no keys.
// }

// 4. Nullish Coalescing Operator (??)
// Returns the right-hand value if the left-hand value is null or undefined.
// Otherwise, it returns the left-hand value.

// Examples:
// let val1;
// val1 = 5 ?? 10;          // Output: 5 (not null/undefined)
// val1 = null ?? 10;       // Output: 10
// val1 = undefined ?? 15;  // Output: 15
// val1 = null ?? 10 ?? 20; // Output: 10 (first non-null/undefined value)
// console.log(val1);       // Output: 10

// 5. Ternary Operator
// A compact way to write conditional statements.

// Syntax:
// condition ? expression_if_true : expression_if_false.

// Example:
// const iceTeaPrice = 100;
// iceTeaPrice <= 80
//     ? console.log("less than 80")
//     : console.log("more than 80"); // Output: "more than 80"

//     Key Takeaways
// Understand the difference between truthy and falsy values for conditional logic.
// Explicitly check for empty arrays/objects using .length or Object.keys.
// Use the Nullish Coalescing Operator (??) to handle null or undefined values gracefully.
// Use the Ternary Operator for concise conditional expressions.
