// JavaScript executes code using a single-threaded, non-blocking event loop with a call stack.
// Here's a short explanation with an example to illustrate how the call stack works in the execution process.

// How it works:

// Call Stack:

// The call stack is a data structure that keeps track of the execution of functions.
// When a function is invoked, it gets pushed onto the stack.
// When the function completes, it gets popped off the stack.

// Execution:

// JavaScript runs synchronously by default. Functions are executed in the order they are called.
// Asynchronous operations (like setTimeout, promises) are handled by the event loop, which waits for
// these operations to complete and then adds their callbacks to the call stack when it's empty.

function first() {
  console.log("First function starts");
  second();
  console.log("First function ends");
}

function second() {
  console.log("Second function starts");
  third();
  console.log("Second function ends");
}

function third() {
  console.log("Third function is executed");
}

first();

// Step-by-step Execution in the Call Stack:
// Main Script Execution:

// The global context (main script) is added to the call stack.
// first() is invoked → first() is pushed onto the stack.
// Inside first():

// "First function starts" is logged.
// second() is invoked → second() is pushed onto the stack.
// Inside second():

// "Second function starts" is logged.
// third() is invoked → third() is pushed onto the stack.
// Inside third():

// "Third function is executed" is logged.
// third() completes → popped off the stack.
// Back to second():

// "Second function ends" is logged.
// second() completes → popped off the stack.
// Back to first():

// "First function ends" is logged.
// first() completes → popped off the stack.
// Global Execution Ends:

// The main script finishes, and the call stack becomes empty.

// output :

// First function starts
// Second function starts
// Third function is executed
// Second function ends
// First function ends

// This demonstrates how JavaScript uses the call stack to manage function execution in a synchronous, step-by-step manner.

// ====================================
// Global execution context
// Function execution context
// Eval execution context

// The global execution context is the default context in which JavaScript code is executed
// The function execution context is created when a function is invoked
// The eval execution context is created when code is executed using the eval() function

// {} => Memort creation Phase - Execution Phase

// let val1 = 10;
// let val2 = 5;
// function addNum(num1, num2) {
//   let total = num1 + num2;
//   return total;
// }
// let result1 = addNum(val1, val2);
// let result2 = addNum(10, 2);

// 1. Global Execution - this
// 2. Memory  creation phase -
//    val1 - undefined
//    val2 - undefined
//    addNum - defination of function
//    result1 - undefined
//    result2 - undefined

// 3. Execution Phase -
//    val1 - 10
//    val2 - 5
//    addNum - function is called with arguments
//    when function execute create new variable environment + Execution thread

//     Memory Creation Phase -
//     val1- undefined
//     val2 - undefined
//     total - undefined

//     Execution context Phase -
//     num1 - 10
//     num2 - 5
//   return total - 15 => Return to global execution context
//   result1 - 15
//   result2 - 12

//   when execution context after delete the memory and return the value to the global execution context

// ====================== proper Explanation ======================================================================================

// JavaScript Execution Contexts and Call Stack
// In JavaScript, the execution of code happens within execution contexts. There are three primary types of execution contexts:

// Global Execution Context
// Function Execution Context
// Eval Execution Context

// 1. Global Execution Context:
// This is the default execution context in which JavaScript code is executed.
// It is the context where all global variables and functions are defined.
// When the code starts running, the global execution context is created.

// 2. Function Execution Context:
// Every time a function is invoked, a new execution context is created for that function.
// This execution context contains the function's arguments, local variables, and the this keyword.

// 3. Eval Execution Context:
// The execution context created when code is run using the eval() function.
// It is rarely used, and it's not recommended for modern JavaScript due to potential security issues and performance concerns.

// Phases of Execution Context:
// Each execution context goes through two main phases:

// 1.Memory Creation Phase
// 2. Execution Phase

// Example to Understand Execution Context:

// let val1 = 10;
// let val2 = 5;

// function addNum(num1, num2) {
//   let total = num1 + num2;
//   return total;
// }

// let result1 = addNum(val1, val2);
// let result2 = addNum(10, 2);

// Step-by-Step Breakdown:
// 1. Global Execution Context:
// The global execution context is created when the script is executed.

// Memory Creation Phase:
// In this phase, JavaScript sets up memory for variables and functions but doesn't assign them values yet.
// Variables: val1, val2, result1, result2 are created and set to undefined.
// Function: addNum is stored with its function definition.
// Memory at this stage:

// val1: undefined
// val2: undefined
// addNum: Function definition
// result1: undefined
// result2: undefined

// Execution Phase:

// Variables val1 and val2 are assigned values: val1 = 10, val2 = 5.
// The function addNum is called twice.
// When addNum(val1, val2) is called, a new Function Execution Context is created.

// 2. Function Execution Context (for addNum(val1, val2)):

// Memory Creation Phase:
// New variables num1, num2, and total are created and set to undefined.
// num1 is assigned the value of val1 (10), and num2 is assigned the value of val2 (5).
// Memory at this stage:

// num1: 10
// num2: 5
// total: undefined

// Execution Phase:

// total is calculated: num1 + num2 = 10 + 5 = 15.
// The value 15 is returned to the global execution context, and the function execution context is popped off the stack.
// 3. Function Execution Context (for addNum(10, 2)):

// Memory Creation Phase:
// New variables num1, num2, and total are created and set to undefined.
// num1 is assigned the value 10, and num2 is assigned the value 2.
// Memory at this stage:

// num1: 10

// num2: 2

// total: undefined

// Execution Phase:

// total is calculated: num1 + num2 = 10 + 2 = 12.
// The value 12 is returned to the global execution context, and this execution context is popped off the stack.
// Final Memory after Execution:
// result1: 15
// result2: 12

// Summary of Phases:
// Global Execution Context:
// Memory Creation Phase: Variables (val1, val2, result1, result2) are declared and set to undefined, function addNum is stored.

// Execution Phase: Variables are assigned values (val1 = 10, val2 = 5), and the function addNum is called twice.
// Function Execution Context for addNum(val1, val2):
// Memory Creation Phase: Local variables num1, num2, and total are created.

// Execution Phase: The function executes, calculates total = 15, and returns it to the global context.
// Function Execution Context for addNum(10, 2):
// Memory Creation Phase: Local variables num1, num2, and total are created.

// Execution Phase: The function executes, calculates total = 12, and returns it to the global context.

// Conclusion:
// Execution contexts help manage the execution of code, keeping track of variables, functions, and the call stack.
// The call stack ensures that JavaScript runs code in the correct order by pushing and popping execution contexts as functions are invoked and return values.

// ================ Call Stack ===================

// The call stack is a data structure that keeps track of the execution of functions.
// When a function is invoked, it gets pushed onto the stack.
// When the function completes, it gets popped off the stack.
// The call stack is a Last-In-First-Out (LIFO) data structure, meaning the last function added is the first to be removed.

function first() {
  console.log("First function starts");
  second(); // Calling second function
  console.log("First function ends");
}

function second() {
  console.log("Second function starts");
  third(); // Calling third function
  console.log("Second function ends");
}

function third() {
  console.log("Third function is executed");
}

// Starting point
first(); // Calling first function

// Explanation:

// 1.Call Stack Behavior:

// When first() is called, the first() function is added to the call stack.
// Then, second() is invoked inside first(), so second() is added to the stack on top of first().
// Next, third() is called inside second(), so third() is pushed onto the stack.
// Once third() finishes executing, it is popped off the stack, then second() continues and is popped off the stack.
// Finally, when first() completes, it is popped off the stack.

// 2.Flow of Execution:

// Each function call creates a new execution context that is pushed to the stack.
// The function executes, and once it finishes, the context is removed from the stack.
// This happens in a Last-In-First-Out (LIFO) order.

// Output:
// First function starts
// Second function starts
// Third function is executed
// Second function ends
// First function ends

// Detailed Call Stack Execution (Step-by-Step):
// Global Execution Context:

// The global execution context starts with the script being executed.
// The function first() is called, so it's pushed onto the call stack.
// first() Execution:

// Inside first(), it logs "First function starts".
// The function second() is called, so second() is pushed onto the stack.
// second() Execution:

// Inside second(), it logs "Second function starts".
// The function third() is called, so third() is pushed onto the stack.
// third() Execution:

// Inside third(), it logs "Third function is executed".
// third() finishes and is popped off the stack.
// Back to second():

// After third() completes, it logs "Second function ends".
// second() finishes and is popped off the stack.
// Back to first():

// After second() completes, it logs "First function ends".
// first() finishes and is popped off the stack.
// End of Script:

// Once all functions are completed, the global context is the last remaining one in the stack, and the script finishes executing.
