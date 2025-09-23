// const camelize = function (inputString) {
//   let len = inputString.length;
//   let outputString = ""

//   for (i = 0; i < len; i++) {
//     if ( inputString[i] === '-' ) {
//       outputString += inputString[i+1].toUpperCase()
//       i++
//     } else {
//       outputString += inputString[i]
//     }
//   }
//   return outputString
// }

// const filterRange = function (arr, a, b) {
//   // added brackets around the expression for better readability
//   return arr.filter( item => ( a <= item && item <= b ) );
// }

// const filterRangeInPlace = function (arr, a, b) {
//   // gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//   // The function should only modify the array. It should not return anything.
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // remove if outside of the interval
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// const rSort = function (inputArray) {
//   return inputArray.sort((a,b) => b-a) //is model solution
//   return inputArray.sort().reverse()
// }
// let arr = [5, 2, 1, -10, 8];

// alert( rSort(arr) ); // 8, 5, 2, 1, -10

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted );
// alert( arr );


// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];
// // think of arrow functions like lambda functions
// // lambda item: item.name ==
// let names = users.map(item => item.name);

// alert( names ); // John, Pete, Mary



// sort of, but still wrong
// need standard bracket for the arrow function to generate an object.
// with only => { JS will treat as a function body
// also, practice object generation

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

//WRONG
// let usersMapped = users.map(item => {
//   item.fullName = item.name + " " + item.surname
//   item.id
// })

// //MODEL
// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }));

//So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.


/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

const sortByAge = function(users) {
// takes an array of objects with the age property and sorts them by age.
  return users.sort((a,b) => a.age - b.age)
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete