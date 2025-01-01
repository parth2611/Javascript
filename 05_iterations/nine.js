// Short Notes on reduce Method in JavaScript

// 1. What is reduce?
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single accumulated value.

// Syntax:

// array.reduce(callback(accumulator, currentValue, index, array), initialValue);

// Parameters:
// accumulator: Stores the accumulated result.
// currentValue: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The original array.
// initialValue: The initial value for the accumulator (optional but recommended).

// 2. Example 1: Summing Numbers
// Code:

// const myNums = [1, 2, 3];

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal); // Output: 6

// Explanation:
// The reduce method starts with the initial value 0 (acc = 0).
// Iterates through the array and adds each element (curr) to the accumulator (acc).

// Final result: 0 + 1 + 2 + 3 = 6.

// 3. Example 2: Total Price in a Shopping Cart
// Code:

// const shoppingCart = [
//     { itemName: "js course", price: 2999 },
//     { itemName: "py course", price: 999 },
//     { itemName: "mobile dev course", price: 5999 },
//     { itemName: "data science course", price: 12999 },
// ];

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// console.log(priceToPay); // Output: 22996

// Explanation:
// The reduce method starts with acc = 0 (initial value).
// Adds the price of each item in the shoppingCart array to the accumulator.

// Final result: 0 + 2999 + 999 + 5999 + 12999 = 22996.

// 4. Key Points About reduce:
// Purpose:

// Used to calculate a single value (e.g., sum, product, average) from an array.
// Can also be used to transform arrays into other structures like objects or maps.
// Initial Value:

// Always provide an initial value to avoid errors and ensure predictable results.
// Versatile:

// Can handle more complex operations beyond summation (e.g., flattening arrays, grouping objects).

// 5. Common Use Cases:

// Summing Numbers:

// const numbers = [10, 20, 30];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 60

// Finding Maximum Value:

// const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]);
// console.log(max); // Output: 30

// Transforming Data:

// const data = [{ name: "Alice" }, { name: "Bob" }];
// const names = data.reduce((acc, obj) => {
//     acc.push(obj.name);
//     return acc;
// }, []);
// console.log(names); // Output: ['Alice', 'Bob']
