/* math */

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

/* concat */

//const fName = 'Abdul'; // error - fName has already been declared in another file
const initial = 'A'
const lName = 'Kaeum';
console.log(initial + ' ' + lName);

/* assignment */

let x = 10 + 5;
console.log(x); // 15
x += 5;
console.log(x); // 20
x *= 5;
console.log(x); // 100
x++;
console.log(x); // 101
x--;
console.log(x); // 100

/* compare */

console.log(ageJonas > ageSarah); //true // <, >=, <=, ==, ===

console.log(ageJonas > 18);