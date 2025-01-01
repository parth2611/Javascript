// 1. Introduction to the switch Statement
// The switch statement is used to perform different actions based on different conditions.
// It provides an alternative to using multiple if-else statements when comparing a single variable against multiple values.

// 2. Syntax of switch

// switch (key) {
//     case value:
//         // Code block
//         break;
//     default:
//         // Default code block
//         break;
// }

// key: The expression or variable to evaluate.
// case value:: Represents a possible value of the key.
// break;: Exits the switch block after a matching case is executed. Omitting it will cause "fall-through" behavior (execution continues into subsequent cases).
// default:: Executes if none of the case values match the key.


// 3. Switch Example with month

// const month = "march";

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;
//     default:
//         console.log("default case match");
//         break;
// }


// Variable: The month variable holds the string "march".
// Matching Case: The switch statement compares month to each case value:
// "march" matches the third case, so it logs "march".
// Default Case:
// If no case matches, the default block executes (not triggered in this example).


// 4. Key Features in This Code
// Case Sensitivity: Comparisons in switch are case-sensitive ("march" ≠ "March").
// Break Statement:
// Ensures only the matching case executes. Without break, subsequent cases would also run (fall-through).
// Default Fallback:
// Acts as a catch-all for unmatched cases, improving robustness.


// 5. Advantages of switch
// Cleaner and more readable than multiple if-else blocks for fixed value comparisons.
// Performs well with many conditions due to its structured format.


// 6. Key Takeaways
// Use cases: Ideal for evaluating a single variable against multiple discrete values.
// Fall-through behavior: Be cautious about omitting break, as it may cause unintended execution of subsequent cases.
// Default case: Always include a default case to handle unexpected inputs or edge cases.
// Comparison type: The switch statement uses strict comparison (===), ensuring type safety.


// ================================= Assignment Operator =================================


// 1. Assignment Operator (=)
// Purpose: Used to assign a value to a variable.
// Example:

// let x = 5;  // Assigns the value 5 to the variable x.
// Notes:
// It doesn’t compare values. Using it mistakenly in comparisons can lead to logical error

// 2. Equality Operator (==)
// Purpose: Compares two values for equality after performing type conversion.
// Example:
// console.log(5 == "5");  // true (type coercion converts the string "5" to a number before comparison)
// console.log(0 == false);  // true (type coercion converts false to 0)
// Notes:
// Performs type coercion, which can sometimes lead to unexpected results.
// Avoid using this operator when strict equality is required.


// 3. Strict Equality Operator (===)
// Purpose: Compares two values for equality without performing type conversion.
// Example:
// console.log(5 === "5");  // false (types are different: number and string)
// console.log(0 === false);  // false (types are different: number and boolean)
// console.log(5 === 5);  // true (types and values match)
// Notes:
// Preferred over == because it avoids unintended type coercion.


// 4. Inequality Operator (!=)
// Purpose: Compares two values for inequality after performing type conversion.
// Example:
// console.log(5 != "5");  // false (type coercion converts the string "5" to a number)
// console.log(0 != false);  // false (type coercion converts false to 0)
// Notes:
// Avoid using != due to potential issues with type coercion. Use strict inequality instead.

// 5. Strict Inequality Operator (!==)
// Purpose: Compares two values for inequality without performing type conversion.
// Example:    
// console.log(5 !== "5");  // true (types are different: number and string)
// console.log(0 !== false);  // true (types are different: number and boolean)
// console.log(5 !== 5);  // false (types and values match)
// Notes:
// Preferred over != to avoid issues caused by type coercion.


// 6. Key Differences
// Operator	    Description	                          Type Coercion	   Example	    Result
// =	        Assignment operator	                       No	       let x = 5;   x is now 5
// ==	        Equality with type conversion	           Yes	       5 == "5"	    true
// ===	        Strict equality without type conversion	   No	       5 === "5"	false
// !=	        Inequality with type conversion	           Yes	       5 != "5"	    false
// !==	        Strict inequality without type conversion  No	       5 !== "5"	true

// 7. Recommendation
// Use === and !== for comparisons to ensure type safety and avoid unexpected results due to type coercion.
// Avoid == and != unless you specifically intend to leverage type coercion.