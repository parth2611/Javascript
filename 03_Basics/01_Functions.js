// Functions
//In JavaScript, functions are blocks of reusable code that can be defined and invoked to perform a specific task./

function sayMyname() {
  console.log('parth');
  console.log('fadadu');
}

// sayMyname()

// Function definition: addTwoNumbers
function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2
  //   return result
  return number1 + number2;
}
// Function invocation: addTwoNumbers
// The result of adding 23 and null is NaN (Not a Number).
addTwoNumbers(23, null);

const result = addTwoNumbers(3, 5);
// console.log('result :::', result);

// Function definition: loginuserMessage with a default parameter 'patel'
function loginuserMessage(username = 'patel') {
  if (!username) {
    console.log('please enter a username');
    return;
  }
  return `${username} just logged In`;
}
// console.log(loginuserMessage('parth'));
console.log(loginuserMessage('parth'));
//please enter a username
//parth just logged In

//    Functions with Object and Array    //

function calculateCartPrice(v1, v2, ...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 600)); //[600]
//This function takes three parameters (v1, v2, and the rest parameter ...num1).
//The rest parameter num1 collects any additional arguments passed to the function into an array.
//In this case, it collects all arguments after v2. The function then returns the num1 array.
// Explanation: The function is called with arguments 200, 400, and 600.
// The rest parameter num1 captures the remaining arguments (600) into an array, and that array is returned.

const user = {
  username: 'parth',
  prices: 299,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handleObject(user)
handleObject({
  username: 'sam',
  price: 200,
}); // username is sam and price is 200
// This function takes an object as a parameter and logs a message using properties from that object.

const myArray = [200, 400, 300, 200];

function returnsecondValue(getArray) {
  return getArray[3];
}

console.log(returnsecondValue(myArray));
console.log(returnsecondValue([200, 400, 300, 200]));
// This function takes an array as a parameter and returns the value at the index 3 (fourth element).
// Explanation: The function is called twice, once with the myArray and once with a new array.
// In both cases, it returns the value at index 3 of the array, which is 200.

/********************* ARRAY METHODS  *********************/

// In JavaScript, functions are blocks of reusable code that can be defined and invoked to perform a specific task.
//  Here's an overview of how you can work with functions in JavaScript:
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }
// greet("John"); // Outputs: Hello, John!

// Function Expression:
// const greet = function(name) {
//   console.log("Hello, " + name + "!");
// };
// greet("Jane"); // Outputs: Hello, Jane!

// Arrow Function (ES6+):
// const greet = (name) => {
//   console.log("Hello, " + name + "!");
// };
// greet("Alex"); // Outputs: Hello, Alex!

// Function Invocation:
// function add(a, b) {
//   return a + b;
// }
// const result = add(3, 5);
// console.log(result); // Outputs: 8

// Default Parameters (ES6+):
// function greet(name, greeting = "Hello") {
//   console.log(greeting + ", " + name + "!");
// }
// greet("Alice"); // Outputs: Hello, Alice!
// greet("Bob", "Good morning"); // Outputs: Good morning, Bob!

// Rest Parameter (ES6+):
// function sum(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// console.log(sum(1, 2, 3, 4)); // Outputs: 10

// Functions are a fundamental
// part of JavaScript, and they can be used for a variety of purposes,
// including code organization, abstraction, and reusability.
