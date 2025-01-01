// Short Notes on for...in Loop in JavaScript

// 1. for...in Loop
// Iterates over the keys (properties or indices) of an object or array.

// Syntax:

// for (const key in object) {
//     // Code to execute
// }

// 2. for...in with Objects
// The for...in loop is commonly used for iterating over the keys of a plain object.

// Example:

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// };

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// Output:

// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

// 3. for...in with Arrays

// The for...in loop iterates over the indices of an array, not the values.

// Example:

// const programming = ['js', 'rb', 'py', 'java', 'cpp'];

// for (const key in programming) {
//     console.log(programming[key]); // Logs the values using the indices.
// }

// Output:
// js
// rb
// py
// java
// cpp

// 4. for...in with Maps

// The for...in loop does not work with Maps because Maps are not plain objects.

// Example:

// const map = new Map();
// map.set('IN', 'India');
// map.set('USA', 'United States of America');
// map.set('Fr', 'France');

// for (const key in map) {
//     console.log(key); // Does not log anything because Maps are not iterable by `for...in`.
// }

// Correct Approach: Use for...of to iterate over Maps:

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }

// Output:

// IN :- India
// USA :- United States of America
// Fr :- France

// 5. Key Points

// Use Cases:
// Use for...in for iterating over object keys or array indices.
// Use for...of for iterating over iterable values (like arrays, strings, or Maps).

// Difference Between for...in and for...of:
// for...in: Iterates over keys or indices.
// for...of: Iterates over values.

// Compatibility with Different Data Structures:
// Objects and arrays are compatible with for...in.
// Maps and Sets require for...of.

// Performance:
// Avoid using for...in for arrays when for...of or forEach can directly iterate over values, making the code cleaner.
