// Hello, object
// importance: 5
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

// let user = {
//   name: "John",
//   surname: "Smith",
// };
// user.fullName = user.name + " " + user.surname,

// console.log(user.name);
// console.log(user.surname);
// console.log(user.fullName);
// user.name = "Pete";
// console.log(user.name);
// console.log(user.fullName);
// delete user.name;
// console.log(user.name);
// console.log(user.fullName);

//

// Check for emptiness
// function isEmpty(obj) {
//   for (let key in obj) {
//     // if the loop has started, there is a property
//     return false;
//   }
//   return true;
// }

// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false



// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.
// let sum = 0;
// for ( key in salaries ) {
//   sum += salaries[key];
// }
// console.log(sum);


// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

const multiplyNumeric = function(object) {
  for ( key in object ) {
    console.log("before: " + object[key]);
    if ( typeof(object[key]) == 'number' ) {
      object[key] *= 2;
    }
    console.log("after: " + object[key]);
  }
}

multiplyNumeric(menu);