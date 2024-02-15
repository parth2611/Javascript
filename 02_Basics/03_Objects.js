// singleton object

//declare of Object( Object Literals )
// 1. constructor - create sinleton object when declare
// 2. literal - not create singleton object when declare

//Object.create  - singleton using constructor method

const mySym = Symbol('key1');

const jsUser = {
  name: 'parth',
  'full name': 'parth patel',
  [mySym]: 'mykey1',
  age: 25,
  location: 'Ahmedabad',
  email: 'parth@gmail.com',
  isLoggedIn: false,
  lastloginDays: ['monday', 'saturday'],
};

// Accessing properties of jsUser
console.log(jsUser.email); // Output: parth@gmail.com
console.log(jsUser['email']); // Output: parth@gmail.com
console.log(jsUser['full name']); // Output: parth patel
console.log(jsUser[mySym]); // Output: mykey1

// Modifying a property and attempting to freeze the object
jsUser.email = 'pgf@gmail.com';
// Object.freeze(jsUser);  // Uncommenting this line will prevent further modifications

jsUser.email = 'parthf@gmail.com';
// console.log(jsUser);      // If Object.freeze is uncommented, this line will not change the email

// Adding methods to the jsUser object
jsUser.greeting = function () {
  console.log('Hello js user');
};

jsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`);
};

// Calling the added methods
console.log(jsUser.greeting()); // Output: Hello js user
console.log(jsUser.greetingTwo()); // Output: Hello js user, parth

// Explanation:

// The jsUser object is created with various properties, including a symbol (mySym).
// Properties are accessed using dot notation (jsUser.email) or bracket notation (jsUser['full name']).
// An attempt to modify the email property is made after the initial assignment,
// and the effect of Object.freeze is demonstrated (commented out by default).
// Two methods (greeting and greetingTwo) are added to the jsUser object.
// The added methods are called, demonstrating how to invoke functions within an object.
// The second method uses the this keyword to refer to the object's properties.
