/// Scopes ///

// let a = 10
// const b = 20
// var c = 30

let a = 300; // Declares a global variable `a` with value 300  // global scope
if (true) {
  // The `if` statement block creates a new scope
  let a = 10; // Declares a local variable `a` within the block, shadowing the global `a`
  const b = 20; // Declares a constant `b` within the block, accessible only within the block
  // var c = 30; // If uncommented, this would declare a function-scoped `c`,
  // accessible outside the block (not recommended due to hoisting)
}

// All if {} was block scope

// console.log(a); // Accesses the global `a`, which remains 300
// console.log(b); // Error: `b` is not accessible outside its block
// console.log(c); // If uncommented, this would access the function-scoped `c`,
// but it's likely undefined unless initialized earlier

//Local Scope:
//Variables declared within a function have local scope, meaning they are only accessible within that function.
// function myFunction() {
//     var localVar = "I am local!";
//     console.log(localVar);
// }
// myFunction(); // Output: "I am local!"
// Trying to access localVar outside the function will result in an error
// console.log(localVar); // Error: localVar is not defined

//Global Scope:
// Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.
// var globalVar = "I am global!";

// function myFunction() {
//     console.log(globalVar);
// }

// myFunction(); // Output: "I am global!"

// Accessing globalVar outside the function
// console.log(globalVar); // Output: "I am global!"

//Keep in mind that declaring variables without the var, let, or const keywords inside a function will make them implicitly global.
//  This is generally not recommended to avoid unintentional global variable collisions and to promote better code organization.

//Example with an implicitly global variable:
//function myFunction() {
//     implicitGlobalVar = "I am implicitly global!";
//     console.log(implicitGlobalVar);
// }

// myFunction(); // Output: "I am implicitly global!"

// Accessing implicitGlobalVar outside the function
// console.log(implicitGlobalVar); // Output: "I am implicitly global!"

// Additional Points:

// Block-Level Scope: Using let or const within blocks (like if statements) creates variables with block-level scope, accessible only within that block.
// Hoisting: Global and function-level variables declared with var undergo hoisting,
// making them accessible before their declaration (but with a undefined value initially).
//  This is a quirk of JavaScript that's best avoided in modern code.
// Best Practices: Use let or const for new variable declarations, and avoid global variables whenever possible.
//  This leads to cleaner and more predictable code behavior.

//------------------------------------------------------------------------------//
// Global vs. Local Scope:
// Variables declared outside of any block (like a = 300) have global scope and are accessible throughout the program.
// Variables declared within blocks (like let a = 10 and const b = 20) have local scope and are only accessible within that block.

// Shadowing:
// When you declare a variable with the same name within a block as one outside it, the inner variable shadows the outer one,
// meaning the inner one takes precedence within the block. In this case, let a = 10 shadows the global a = 300 within the if block.

// let vs. const:
// let variables can be reassigned within their scope.
// const variables cannot be reassigned after their initial declaration.

// Block Scope:
// Blocks like if statements, for loops, and {} create new scopes. Variables declared within a block are not accessible outside it.
// Function Scope (using var, not recommended):

// If you uncomment var c = 30,
// it would declare a function-scoped variable c, accessible throughout the function where it's declared (even outside the if block) due to hoisting.
// However, using var for variable declaration is generally discouraged due to potential hoisting-related issues.
// It's recommended to use let or const instead for clear scope definition.

// Function Scope
function one() {
  const userName = 'parth';
  function two() {
    const website = 'youtube';
    console.log(userName);
  }
  //   console.log(website);
  //   two();
}
// one();

// IfElse Scope
if (true) {
  const userName = 'parth';
  if (userName === 'parth') {
    const website = ' youtube';
    // console.log(userName + website);
  }
  //   console.log(website);
}
// console.log(userName);

//************************ Interesting ************************/
function addOne(num) {
  return num + 1;
}
console.log(addOne(4));

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(4));

// Scope Level:

// JavaScript has two primary scope levels:
// Global Scope: Variables and functions declared outside any curly braces ({}) belong to the global scope, accessible from anywhere in the script.
// Local Scope: Variables and functions declared within curly braces ({}) belong to the local scope, accessible only within those curly braces.

// Mini-Hoisting:

// When JavaScript executes code, it performs two phases:
// Memory Creation Phase: Declarations (variable and function names) are "hoisted" (seemingly moved) to the top of their scope.
// Execution Phase: The code is executed line by line.
// However, only declarations, not assignments, are hoisted.
//  Attempting to use a hoisted variable before its assignment results in undefined or a ReferenceError.

// Example:
// function outerFunction() {
//     console.log(a); // undefined (declaration hoisted)
//     var a = 10;  // Assignment not hoisted

//     if (true) {
//         var b = 20; // Declared in local scope (outerFunction)
//         console.log(b); // 20 (accessible within outerFunction)
//     }
//     console.log(b); // ReferenceError: b is not defined (not accessible outside its scope)

//     function innerFunction() {
//         console.log(c); // ReferenceError: c is not defined (not hoisted because it's a function expression)
//         let c = 30;  // let and const declarations are not hoisted in modern JavaScript
//     }
//     innerFunction(); // Throws ReferenceError
// }

// outerFunction();

//Key Points:

// Hoisting benefits readability and allows recursive function calls, but it can lead to unexpected behavior if not understood well.
// var allows redeclaration and reassignment within its scope, while let and const are block-scoped and prevent these issues.
// For modern JavaScript, use let and const to avoid confusion and potential errors.

// Incorporating Feedback:
// I've avoided using the term "temporary dead zone" as it is not an official ECMAScript concept.
// I've provided a clear differentiation between var and let/const in terms of hoisting behavior.
// I've clarified that function expressions cannot be hoisted because they are not declarations.
