const marvelHeros = ['thor', 'iron man', 'hawkeye', 'spiderman'];
const dc_heros = ['superman', 'batman', 'flash'];

marvelHeros.push(dc_heros);

console.log(marvelHeros);
console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(dc_heros);
console.log(allHeros);
//The concat() method is used to concatenate the two arrays (marvelHeros and dc_heros) into a new array called allHeros.

const all_new_heros = [...marvelHeros, ...dc_heros];
console.log(all_new_heros);
//Spread operator : The spread operator (...) is used to concatenate the two arrays (marvelHeros and dc_heros) into a new array called all_new_heros.
// This is a more modern syntax.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] merge all array
// The flat() method with an argument of Infinity is used to flatten the nested arrays, resulting in a single-dimensional array.

console.log(Array.isArray('parth')); //false
console.log(Array.from('parth')); //string to array convert  ['p', 'a', 'r', 't', 'h' ]
console.log(Array.from({ name: 'parth' })); //intresting
//The first line checks if the given value ('parth') is an array. In this case, it's false.
// The second line converts the string 'parth' into an array of its characters using Array.from().
// The third line attempts to convert an object { name: 'parth' } to an array.
// However, since the object is not iterable, it results in an array with a single undefined element.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// The Array.of() method is used to create an array from individual values (score1, score2, score3).
//  It creates a new array [100, 200, 300] and logs it to the console.
