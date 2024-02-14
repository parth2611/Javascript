const name = 'parth';
const repoCount = 50;

console.log(name +  repoCount + " Value"); // outdated version of string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('parth-gf');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.includes(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-3);
console.log(anotherString);

const stringOne = '    parth    ';
console.log(stringOne);
console.log(stringOne.trim());

const url = 'https://parth.com/parth%20fadadu';
console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));

//Methods of strings
// Certainly! Here's a comprehensive list of various string methods in JavaScript along with brief explanations:

// charAt(index)
// Returns the character at the specified index.

// charCodeAt(index)
// Returns the Unicode value of the character at the specified index.

// codePointAt(index)
// Returns a non-negative integer representing the code point value of the character at the specified index.

// concat(string1, string2, ...)
// Concatenates two or more strings.

// includes(substring, position)
// Checks if a string contains the specified substring. Returns true or false.

// endsWith(suffix, length)
// Checks if a string ends with the specified suffix. Returns true or false.

// indexOf(searchValue, fromIndex)
// Returns the index of the first occurrence of a substring, starting from the specified index.

// lastIndexOf(searchValue, fromIndex)
// Returns the index of the last occurrence of a substring, starting from the specified index.

// localeCompare(compareString)
// Compares two strings in the current locale.

// match(regexp)
// Retrieves the result of matching a string against a regular expression.

// matchAll(regexp)
// Returns an iterator of all matched substrings of a string against a regular expression.

// normalize([form])
// Returns the Unicode Normalization Form of a given string.

// padEnd(targetLength, [padString])
// Pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.

// padStart(targetLength, [padString])
// Pads the current string from the start with a given string (repeated, if needed) so that the resulting string reaches a given length.

// repeat(count)
// Returns a new string consisting of the original string repeated a specified number of times.

// replace(searchValue, replaceValue)
// Replaces a specified value or regular expression with another value.

// replaceAll(searchValue, replaceValue)
// Replaces all occurrences of a specified value or regular expression with another value.

// search(regexp)
// Searches a string for a specified value or regular expression. Returns the index of the first match or -1 if not found.

// slice(startIndex, endIndex)
// Extracts a portion of a string from the specified start to end index.

// split(separator, [limit])
// Splits a string into an array of substrings based on a specified separator.

// startsWith(prefix, [position])
// Checks if a string starts with the specified prefix. Returns true or false.

// substr(start, length)
// Returns the characters in a string beginning at the specified location through the specified number of characters.

// substring(start, end)
// Returns the characters in a string between two indices.

// toLocaleLowerCase([locale])
// Converts all characters in a string to lowercase, according to the host's current locale.

// toLocaleUpperCase([locale])
// Converts all characters in a string to uppercase, according to the host's current locale.

// toLowerCase()
// Converts all characters in a string to lowercase.

// toString()
// Returns a string representing the specified object.

// toUpperCase()
// Converts all characters in a string to uppercase.

// trim()
// Removes leading and trailing whitespaces from a string.

// trimEnd()
// Removes trailing whitespaces from a string.

// trimStart()
// Removes leading whitespaces from a string.

// valueOf()
// Returns the primitive value of the specified object.

//examples of strings
// 1. charAt(index)
const str1 = 'Hello';
console.log(str1.charAt(1)); // Output: 'e'

// 2. concat(string1, string2, ...)
const str2 = 'Hello';
const str3 = 'World';
console.log(str2.concat(', ', str3)); // Output: 'Hello, World'

// 3. includes(substring, position)
const str4 = 'Hello, World!';
console.log(str4.includes('World')); // Output: true

// 4. endsWith(suffix, length)
const str5 = 'Hello, World!';
console.log(str5.endsWith('World!')); // Output: true

// 5. indexOf(searchValue, fromIndex)
const str6 = 'Hello, World!';
console.log(str6.indexOf('o')); // Output: 4

// 6. lastIndexOf(searchValue, fromIndex)
const str7 = 'Hello, World!';
console.log(str7.lastIndexOf('o')); // Output: 7

// 7. match(regexp)
const str8 = 'Hello, World!';
const result = str8.match(/o/g);
console.log(result); // Output: ['o', 'o']

// 8. replace(searchValue, replaceValue)
const str9 = 'Hello, World!';
console.log(str9.replace('World', 'Universe')); // Output: 'Hello, Universe!'

// 9. search(regexp)
const str10 = 'Hello, World!';
console.log(str10.search(/o/)); // Output: 4

// 10. slice(startIndex, endIndex)
const str11 = 'Hello, World!';
console.log(str11.slice(0, 5)); // Output: 'Hello'

// 11. split(separator, [limit])
const str12 = 'apple,orange,banana';
const fruits = str12.split(',');
console.log(fruits); // Output: ['apple', 'orange', 'banana']

// 12. startsWith(prefix, [position])
const str13 = 'Hello, World!';
console.log(str13.startsWith('Hello')); // Output: true

// 13. toLowerCase()
const str14 = 'HELLO';
console.log(str14.toLowerCase()); // Output: 'hello'

// 14. toUpperCase()
const str15 = 'hello';
console.log(str15.toUpperCase()); // Output: 'HELLO'

// 15. trim()
const str16 = '  Hello, World!  ';
console.log(str16.trim()); // Output: 'Hello, World!'

// 16. repeat(count)
const str17 = 'abc';
console.log(str17.repeat(3)); // Output: 'abcabcabc'
