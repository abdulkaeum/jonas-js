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

/* order precedence */
/* in this case the maths is done first then the comparison */
console.log(now - 1991 > now - 2018); //is value > value

console.log(25 - 10 - 5); // left-to-right

let a, b;
a = b = 25 - 10 - 5; // a = b = 10, b = 10, a = 10
console.log(a, b);

const averageAge = ageSarah + ageJonas / 2;
console.log(averageAge, ageSarah, ageJonas); //42 19 46 // wrong

const averageAge2 = (ageSarah + ageJonas) / 2;
console.log(averageAge2, ageSarah, ageJonas); //42 19 46 // use grouping to add first