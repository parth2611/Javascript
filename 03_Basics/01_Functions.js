// Functions
//In JavaScript, functions are blocks of reusable code that can be defined and invoked to perform a specific task./

function sayMyname() {
  console.log('parth');
  console.log('fadadu');
}

// sayMyname()

// Function definition: addTwoNumbers
function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2
  //   return result
  return number1 + number2;
}
// Function invocation: addTwoNumbers
// The result of adding 23 and null is NaN (Not a Number).
addTwoNumbers(23, null);

const result = addTwoNumbers(3, 5);
// console.log('result :::', result);

// Function definition: loginuserMessage with a default parameter 'patel'
function loginuserMessage(username = 'patel') {
  if (!username) {
    console.log('please enter a username');
    return;
  }
  return `${username} just logged In`;
}
// console.log(loginuserMessage('parth'));
console.log(loginuserMessage('parth'));
//please enter a username
//parth just logged In
