//const tinderUser = new Object() //singleton object
const tinderUser = {}; //nonsingleton object

tinderUser.id = '123abc';
tinderUser.name = 'Sammy';
tinderUser.isloggedIn = false;

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isloggedIn: false }

const regularUser = {
  email: 'some@gmail.com',
  fullName: {
    userFullName: {
      firstName: 'parth',
      lastName: 'fadadu',
    },
  },
};

console.log(regularUser.fullName.userFullName.firstName); //parth

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'd' };
const obj3 = { 5: 'e', 6: 'f' };

// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj2, ...obj3 }; // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj4);
// This uses the spread (...) operator to merge three objects (obj1, obj2, and obj3) into a new object obj4.

const users = [
  {
    id: 1,
    email: 'p@gmail.com',
  },
  {
    id: 2,
    email: 'p@gmail.com',
  },
];

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // keys
console.log(Object.values(tinderUser)); // values
console.log(Object.entries(tinderUser)); // array under array
console.log(tinderUser.hasOwnProperty('isloggedIn')); //true

// Object.keys(tinderUser): Outputs an array of the object's keys (['id', 'name', 'isloggedIn']).
// Object.values(tinderUser): Outputs an array of the object's values (['123abc', 'Sammy', false]).
// Object.entries(tinderUser): Outputs an array of arrays, where each sub-array contains a key-value pair ([['id', '123abc'], ['name', 'Sammy'], ['isloggedIn', false]]).
// tinderUser.hasOwnProperty('isloggedIn'): Checks if the object has a property named 'isloggedIn' and outputs true in this case.

const course = {
  courseName: 'Javascript',
  price: '300',
  courseInstructor: 'Parth',
};

// course.courseInstructor

const { courseInstructor: instructor } = course;
console.log(instructor);

// {
//   "name":"parth",
//   "courseName":"js",
//   "price":"free"
// }

[{}, {}, {}];

//Object destructuring is a powerful feature in JavaScript that allows you to extract properties
//from objects into variables in a clean and concise way. Here's how it works:

// 1. Basic Destructuring:
// const person = { name: 'Alice', age: 30, city: 'New York' };

// Destructuring without aliases
// const firstName = person.name;
// const age = person.age;

// Destructuring with aliases
// const { name: fullName, age, city } = person;

// console.log(firstName); // Alice
// console.log(age); // 30
// console.log(fullName); // Alice
// console.log(city); // New York



// 2. Nested Destructuring:
// const user = {
//   profile: {
//     firstName: 'Bob',
//     lastName: 'Smith',
//   },
//   address: {
//     street: '123 Main St',
//     city: 'Seattle',
//   },
// };

// Destructuring nested properties
// const { profile: { firstName, lastName }, address: { city } } = user;

// console.log(firstName); // Bob
// console.log(lastName); // Smith
// console.log(city); // Seattle



// 3. Default Values:
// const product = { name: 'Book', price: 10 };

// Destructuring with default values
// const { name, price = 0 } = product; // price will be 0 if not defined

// console.log(name); // Book
// console.log(price); // 10



// 4. Rest Operator:
// const fruits = ['apple', 'banana', 'orange', 'mango'];

// Destructuring with rest operator
// const [firstFruit, ...otherFruits] = fruits;

// console.log(firstFruit); // apple
// console.log(otherFruits); // ['banana', 'orange', 'mango']



// 5. Destructuring Arrays:
// const numbers = [1, 2, 3, 4];

// Destructuring first two elements
// const [firstNumber, secondNumber] = numbers;

// console.log(firstNumber); // 1
// console.log(secondNumber); // 2
