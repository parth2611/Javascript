// Immediately Invoked Function Expressions IIFE

(function chai() {
  // Named IIFE
  console.log(`DB CONNECTED`);
})();
//This is an example of a named IIFE. The function chai is defined and immediately invoked.
// It logs "DB CONNECTED" to the console. The parentheses at the end ( ) ensure that the function is executed immediately after being defined.

// add ; for after one execution of iife function then second execution of function is possible

//To avoid conflicts caused by global scope pollution,
//Immediately-Invoked Function Expressions (IIFEs) are often used to isolate variables and
//prevent them from accidentally affecting the global namespace.
// global scope k polution se prob hoti he kai bar us global scope k variables he use hatane ke liye iife ka use kiya he
// () first-   write a function definition
// () second-  function execution

// (()=>{
//     console.log(`DB connected two`);
// })()

((name) => {
  // UnNamed IIFE
  console.log(`DB connected two ${name}`);
})('Parth');

//This is an example of an unnamed (anonymous) IIFE.
// The function is defined and immediately invoked with the argument "Parth". It logs "DB connected two Parth" to the console.
// This style of IIFE is often used when you want to create a function with parameters.

//Here's an IIFE function that prints "Hello!" to the console and a brief explanation:

// (function () {
//   console.log("Hello!");
// })();
// Output:
// Hello!

// Explanation:
// (function () { ... }): This defines an anonymous function expression.
// (): Immediately invokes the function, making it self-executing.
// This creates a private scope, preventing variables and functions within the IIFE from polluting the global namespace.
// The console.log statement outputs "Hello!" to the console before the function finishes execution.

//================================ ================================================//
// In JavaScript, when you have two consecutive statements that start with a function or an object literal and do not have a semicolon between them,
//  they might be interpreted as a single statement. This can lead to unexpected behavior,
//  as the JavaScript engine may attempt to combine them.

// Let's consider the following example without a semicolon
(function firstFunction() {
  console.log('First function');
})()(function secondFunction() {
  console.log('Second function');
})();

(function firstFunction() {
  console.log('First function');
})(function secondFunction() {
  console.log('Second function');
})();

// This can cause a syntax error, as the second set of parentheses might be treated as an attempt to call the result of the first function immediately,
// and the syntax is not valid.
// To avoid this potential issue, it's a good practice to add a semicolon after the first statement:
(function firstFunction() {
  console.log('First function');
})();

(function secondFunction() {
  console.log('Second function');
})();
//By adding the semicolon, you explicitly separate the two statements,
// ensuring that the second function is treated as a new statement and not as part of the first function call.
