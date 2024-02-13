// JavaScript is a dynamically typed language.
// This means that variable types are determined at runtime,
//and you do not need to explicitly declare the type of a variable before using it.
// You can assign different types of values to a variable during its lifetime.

// Primitive
// 7 Types: String, Number, Boolean, null, undefined, symbol, BigInt
const score = 100; // Number
const scoreValue = 100.3; // Number
const isLoggedIn = true; // Boolean
const outsideTemp = null; // null
let userEmail; // undefined

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false (Symbols are always unique)

const bigNumber = 243534534535435435645n; // BigInt

// Reference datatype (Non-Primitive)
// Arrays, Objects, Functions

let heros = ['krishna', 'arjun', 'balram']; // Array (object subtype)
let myObj = {
  name: 'parth',
  age: 22,
}; // Object

const myFunction = function () {
  console.log('Hello parth');
}; // Function

console.log(typeof anotherId); // symbol

//https://262.ecma-international.org/5.1/#sec-11.4.3

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//Primitive DataTypes:

// 1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.

// 2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

// 3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

// 4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

// 5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null;

// 6.Symbol (ES6): it is mostly used used to find uniqnece.

// 7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

//  Refence (Object Data Types):

// 1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

// 2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

// 3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

// 4.Date: Represents dates and times.

// 5.RegExp: Represents regular expressions for pattern matching.

// lets talk about some Range of Primitive DataType:

//     1.Number:
//         Represents both integers and floating-point numbers.
//         Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
//         Smallest Increment: 2^(-52).

//     2.String:
//         Represents a sequence of characters.
//         No specific range limit, but practical limits depend on memory and system resources.

//     3.Boolean:
//         Represents true or false.
//         Only two possible values: true and false.

//     4.Undefined:
//         Represents a variable that has been declared but hasn't been assigned a value.
//         It has only one possible value: undefined.

//     5.Null:
//         Represents the intentional absence of any object or value.
//         It has only one possible value: null.

//     6.Symbol (ES6):
//         Represents a unique and immutable value.
//         No specific range limit.

//     7.BigInt (ES11):
//         Represents large integers that cannot be represented by the Number type.
//         The range is practically unlimited and depends on available memory.
