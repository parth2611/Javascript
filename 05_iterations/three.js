// 1. for...of Loop

// Iterates over the values of an iterable object like arrays, strings, Maps, Sets, etc.

// Syntax:

// for (const element of iterable) {
//     // Code to execute
// }

// Example with Arrays:

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num); // Logs 1, 2, 3, 4, 5.
// }

// Example with Strings:

// const greetings = "Hello world!";
// for (const char of greetings) {
//     console.log(`Each char is ${char}`); // Logs each character.
// }

// 2. for...of with Maps

// Maps store key-value pairs, and for...of can iterate through them.
// Use destructuring to access both keys and values.

// Example:

// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('Fr', 'France');

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }

// Output:

// IN :- India
// USA :- United States of America
// Fr :- France

// 3. for...of with Objects
// for...of does not work directly on plain objects because they are not iterable.

// Example:

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// };

// This will throw an error:
// for (const [key, value] of myObject) {
//      console.log(`${key} :- ${value}`);
//  }

// Workaround: Use Object.entries() to make an object iterable:

// for (const [key, value] of Object.entries(myObject)) {
//     console.log(`${key} :- ${value}`); // Logs keys and values.
// }

// Output:

// game1 :- NFS
// game2 :- Spiderman

// 4. Key Points
// Iterable Objects:
// for...of works on iterables like arrays, strings, Maps, Sets, and others with the [Symbol.iterator] property.
// Plain objects are not iterable but can be converted using Object.entries() or similar methods.

// Comparison with for...in:
// for...of iterates over values.
// for...in iterates over keys or indices.

// Maps and Destructuring:
// Use destructuring [key, value] to extract both parts of a key-value pair in a Map

// Readable and Convenient:
// for...of is cleaner and more readable for iterating over values compared to traditional for loops.
