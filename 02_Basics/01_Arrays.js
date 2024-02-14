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
