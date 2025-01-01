// Short Notes on forEach and filter in JavaScript

// 1. forEach
// Executes a provided function once for each element in an array.
// Does not return a new array; only performs actions for side effects.

// Example:

// const myNums = [1, 2, 3, 4, 5, 6];
// const newNums = [];

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// });
// console.log(newNums); // [5, 6]

// Key Points:
// forEach is useful for actions like logging, modifying external states, or side effects.
// Does not work well for creating or transforming arrays.

// 2. filter
// Creates a new array with all elements that pass the test implemented by the provided function.
// Returns the new array without modifying the original.

// Syntax:

// const newArray = array.filter(callback(currentValue, index, array));

// Example:

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums); // [5, 6, 7, 8, 9, 10]

// Key Points:
// Used when you want to select or filter elements from an array based on a condition.
// Returns a new array containing only the elements that meet the condition.

// 3. Filtering an Array of Objects

// You can filter objects in an array based on specific properties or conditions.

// Example:

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// const userBooks = books.filter((bk) => bk.genre === 'History');
// console.log(userBooks);
// // Logs books with genre 'History'

// Example with Multiple Conditions:

// const userBooks = books.filter(
//   return (bk) => bk.publish >= 1995 && bk.genre === 'History'
// );
// console.log(userBooks);

// Output:

// [
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
// ]

// 4. Comparison Between forEach and filter

// Feature	                  forEach	                      filter
// Purpose	        Iterating and performing actions	    Filtering elements based on conditions
// Return Value	    Does not return a new array	          Returns a new filtered array
// Modification	    Does not modify the original array	  Does not modify the original array
// Use Case	        Logging or side effects	              Selecting or filtering elements
