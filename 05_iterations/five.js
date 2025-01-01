// /*
// Short Notes on forEach in JavaScript
// */

// 1. forEach Method
// The forEach method executes a provided function once for each element in an array.

// Syntax:

// array.forEach(callback(currentValue, index, array));
// Parameters:
// currentValue: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array forEach is iterating over.

// 2. Basic Usage
// Iterating over an array of strings:

// const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach((item) => {
//     console.log(item); // Logs each element in the array.
// });

// Output:
// js
// ruby
// java
// python
// cpp

// 3. Using Named Functions
// Instead of an anonymous function, you can use a named function:

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// Output:
// js
// ruby
// java
// python
// cpp

// 4. Accessing Additional Parameters
// You can access the index and the entire array during each iteration:

// coding.forEach((item, index, arr) => {
//     console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
// });

// Output:

// Item: js, Index: 0, Array: js,ruby,java,python,cpp
// Item: ruby, Index: 1, Array: js,ruby,java,python,cpp
// ...

// 5. Iterating Through an Array of Objects
// forEach can be used to access properties in an array of objects:

// const myCoding = [
//     { languageName: "javascript", languageFileName: "js" },
//     { languageName: "java", languageFileName: "java" },
//     { languageName: "python", languageFileName: "py" },
// ];

// myCoding.forEach((item) => {
//     console.log(item.languageName); // Logs each language name.
// });

// Output:
// javascript
// java
// python

// 6. Key Points :

// No Return Value:
// forEach does not return a value; it only executes the callback for each array element.

// Chaining:
// Since forEach doesn't return a new array, you cannot chain methods like map or filter with forEach.

// Difference from for...of:
// forEach is a higher-order method, while for...of is a looping construct.
// forEach provides access to the index and array more conveniently.

// Use Case:
// Use forEach for side effects like logging or modifying external states but prefer map or filter for transformations.
