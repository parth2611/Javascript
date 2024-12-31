// https://tc39.es/proposal-temporal/docs/

//Dates
let myDate = new Date();
console.log(myDate.toString()); // Wed Feb 14 2024 15:55:57 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Wed Feb 14 2024
console.log(myDate.toISOString()); // 2024-02-14T10:26:52.195Z
console.log(myDate.toLocaleDateString()); // 2/14/2024
console.log(myDate.toLocaleString()); // 2/14/2024, 4:00:03 PM
console.log(myDate.toLocaleTimeString()); // 4:00:03 PM
console.log(myDate.toTimeString()); // 16:00:03 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString()); // Wed, 14 Feb 2024 10:30:03 GMT
console.log(myDate.toJSON()); // 2024-12-28T09:53:21.712Z
console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate = new Date('2024-02-14');
console.log(myCreatedDate.toLocaleString()); // 2/14/2024, 5:30:00 AM

let mytimeStamp = Date.now();
console.log(mytimeStamp); //1735379601734
console.log(myCreatedDate.getTime()); //1707868800000
console.log(Math.floor(Date.now() / 1000)); // 1735379601

let newDate = new Date();
console.log(newDate.getFullYear() + 1); //2025
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`); //6 and the time is 1735379601735

newDate.toLocaleString('default', {
  weekday: 'long',
});

// 1. new Date() - Creating a new Date object:
// Used to create a new Date object representing the current date and time.
// const currentDate = new Date();
// console.log(currentDate);
// Output: Mon Feb 14 2024 12:30:00 GMT+0000 (Coordinated Universal Time)

// 2. getMonth() - Getting the month (0-based):
// Returns the month of a Date object (0 for January, 1 for February, etc.).
// const currentDate = new Date();
// const currentMonth = currentDate.getMonth();
// console.log(currentMonth);
// Output: 1 (for February)

// 3. getDate() - Getting the day of the month:
// Returns the day of the month for a Date object.
// const currentDate = new Date();
// const dayOfMonth = currentDate.getDate();
// console.log(dayOfMonth);
// Output: 14

// 4. toLocaleTimeString() - Getting the local time as a string:
// Returns a string representing the time portion of a Date object in a localized format.
// const currentDate = new Date();
// const localTime = currentDate.toLocaleTimeString();
// console.log(localTime);
// Output: 12:30:00 PM (formatted based on your locale)

// 5. setFullYear() - Setting the year:
// Sets the year of a Date object.
// const currentDate = new Date();
// currentDate.setFullYear(2023);
// console.log(currentDate.getFullYear());
// Output: 2023

// 6. getTime() - Getting the timestamp:
// Returns the number of milliseconds since January 1, 1970
// const currentDate = new Date();
// const timestamp = currentDate.getTime();
// console.log(timestamp);
// Output: 1644879000000 (current timestamp)

// 7. toLocaleDateString() - Getting the local date as a string:
// Returns a string representing the date portion of a Date object in a localized format.
// const currentDate = new Date();
// const localDate = currentDate.toLocaleDateString();
// console.log(localDate);
// Output: 2/14/2024 (formatted based on your locale)
