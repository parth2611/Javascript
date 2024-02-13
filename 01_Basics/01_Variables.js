const accountID = 12334455;

let accountEmail = 'parth@gmail.com';

var accoundPassword = '12345';

accountCity = 'Ahmedabad';
let accountState;

// accountID = 2 // not allowed

/*
Prefer not to use var
because of issue in block scope and function scope
*/

accountEmail = 'pfaldu5@mail.com';
accoundPassword = '123456';
accountCity = 'surat';

console.log(accountID);

console.table([
  accountID,
  accountEmail,
  accoundPassword,
  accountCity,
  accountState,
]);
