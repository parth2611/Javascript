// Array

// https://www.geeksforgeeks.org/what-is-shallow-copy-and-deep-copy-in-javascript/

//Shallow Copy:
// In programming, a shallow copy refers to creating a new object, but instead of copying the contents of the original object deeply (including nested objects or arrays)
// it only copies the references to those objects. As a result, changes made to the nested objects are reflected in both the original and the copied objects.
// Shallow copies are commonly contrasted with deep copies, which duplicate the entire structure, including nested elements, creating independent copies.
//const originalArray = [1, 2, [3, 4]];
// const shallowCopy = [...originalArray];
// Modify the nested array
// shallowCopy[2][0] = 99;
// console.log(originalArray); // Output: [1, 2, [99, 4]]
// console.log(shallowCopy);   // Output: [1, 2, [99, 4]]

//Deep copy:
// In JavaScript, a deep copy of an array involves creating a new array and copying all elements from the original array along with any nested arrays or objects.
// This results in a completely independent copy, so modifications to the original array or its nested structures do not affect the deep copy, and vice versa
// function deepCopy(originalArray) {
// return JSON.parse(JSON.stringify(originalArray));
//   }
//   const originalArray = [1, 2, [3, 4]];
// Create a deep copy
//   const deepCopyArray = deepCopy(originalArray);
// Modify the nested array in the deep copy
//   deepCopyArray[2][0] = 99;
//   console.log(originalArray);     // Output: [1, 2, [3, 4]]
//   console.log(deepCopyArray);     // Output: [1, 2, [99, 4]]

const myArr = [0, 1, 2, 3, 4, 5];
const Heros = ['shaktimaan', 'krishna'];

const myArr2 = new Array(0, 1, 2, 3, 4, 5);
console.log(myArr[0]);

/// Array methods ///

myArr.push(6);
myArr.push(7);

myArr.unshift(9);
myArr.shift(9);
console.log(myArr.includes(1)); // true
console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

//  slice ,splice
console.log('A', myArr);
//slice
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log('B', myArr);
//splice
const myn2 = myArr.splice(1, 3);
console.log('C', myArr);
console.log(myn2);

// *************** Methods of Arrays *****************************//

// push()
// Adds one or more elements to the end of an array.
// let fruits = ['apple', 'banana'];
// fruits.push('orange');
// fruits is now ['apple', 'banana', 'orange']

// pop()
// Removes the last element from an array.
// let fruits = ['apple', 'banana', 'orange'];
// fruits.pop();
// fruits is now ['apple', 'banana']

// shift()
// Removes the first element from an array.
// let fruits = ['apple', 'banana', 'orange'];
// fruits.shift();
// fruits is now ['banana', 'orange']

// unshift()
// Adds one or more elements to the beginning of an array.
// let fruits = ['banana', 'orange'];
// fruits.unshift('apple');
// fruits is now ['apple', 'banana', 'orange']

// concat()
// Combines two or more arrays.
// let fruits = ['apple', 'banana'];
// let vegetables = ['carrot', 'broccoli'];
// let combined = fruits.concat(vegetables);
// combined is now ['apple', 'banana', 'carrot', 'broccoli']

// slice()
// Returns a portion of an array.
// let fruits = ['apple', 'banana', 'orange', 'kiwi'];
// let slicedFruits = fruits.slice(1, 3);
// slicedFruits is now ['banana', 'orange']

// splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// let fruits = ['apple', 'banana', 'orange'];
// fruits.splice(1, 1, 'grape');
// fruits is now ['apple', 'grape', 'orange']

// indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// let fruits = ['apple', 'banana', 'orange'];
// let index = fruits.indexOf('banana');
// index is 1

// includes()
// Determines whether an array includes a certain element.
// let fruits = ['apple', 'banana', 'orange'];
// let hasBanana = fruits.includes('banana');
// hasBanana is true

// forEach()
// Calls a function once for each element in the array.
// let fruits = ['apple', 'banana', 'orange'];
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });
// logs: apple, banana, orange

// Array.isArray()
// Checks if a given value is an array.
// let arr = [1, 2, 3];
// let isArr = Array.isArray(arr); // true

// Array.from()
// Creates a new, shallow-copied array from an array-like or iterable object.
// let iterable = 'hello';
// let newArray = Array.from(iterable);
// newArray is now ['h', 'e', 'l', 'l', 'o']

// Array.of()
// Creates a new array with the specified elements.
// let newArray = Array.of(1, 2, 3);
// newArray is now [1, 2, 3]

// Array.prototype.flat()
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// let nestedArray = [1, [2, [3, 4]]];
// let flatArray = nestedArray.flat(2);
// flatArray is now [1, 2, 3, 4]
