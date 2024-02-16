// In browser object is a window object
// In node given empty object {}

const user = {
  userName: 'parth',
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to the website`);
    console.log(this);
  },
};

// Call the welcomeMessage function
user.welcomeMessage();

// Change the userName property
user.userName = 'batuk';

// Call the welcomeMessage function again
user.welcomeMessage();

// Log the global object (in a browser, it would be the window object)
console.log(this);

// Regular function declaration
function chai() {
  let username = 'parth f';
  console.log(this.username); // 'this' inside a regular function refers to the global object, prints 'undefined'
}
chai();

// Arrow function declaration
const chaior = () => {
  let username = 'parth f';
  console.log(this); // 'this' in arrow functions refers to the enclosing context, here it refers to the global object
};
chaior();

// Choose one of the following addTwo implementations at a time

// Example 1: Explicit return
const addTwo1 = (num1, num2) => {
  return num1 + num2;
};

// Example 2: Implicit return
const addTwo2 = (num1, num2) => num1 + num2;

// Example 3: Parentheses for implicit return
const addTwo3 = (num1, num2) => num1 + num2;

// Example 4: Object return
const addTwo4 = (num1, num2) => ({ username: 'parth fadadu' });

// Uncomment the following line to see the output for one of the addTwo implementations
// console.log(addTwo1(3, 4));

const myArrays = [1, 2, 3, 4, 6, 4, 5];

// Provide a callback function to forEach
myArrays.forEach((element) => {
  console.log(element * 2); // Print each element multiplied by 2
});

//================== Arrow Function and THIS Keyword ============================//
// In JavaScript, the this keyword is a special variable that is automatically defined in the scope of every function.
// Its value depends on how the function is invoked.
//  The this value is not determined by where the function is declared, but rather by how it is called.

// 1.Global Context:
// console.log(this); // 'this' refers to the global object (e.g., window in a browser)

// 2.Function Context:
function showThis() {
  console.log(this);
}

showThis(); // 'this' refers to the global object

// 3.Method Invocation:
var obj = {
  prop: 'Hello',
  display: function () {
    console.log(this.prop);
  },
};

obj.display(); // 'this' refers to the object 'obj', output: "Hello"

// 4.Constructor Function:
function Person(name) {
  this.name = name;
}

var person1 = new Person('John');
console.log(person1.name); // 'this' refers to the newly created object, output: "John"

// 5.Event Handler:
document.getElementById('myButton').addEventListener('click', function () {
  console.log(this); // 'this' refers to the DOM element that triggered the event
});

// 6.Arrow Functions:
// Arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing scope.
var arrowFunction = () => {
  console.log(this);
};

arrowFunction(); // 'this' depends on the context where the arrow function is defined
