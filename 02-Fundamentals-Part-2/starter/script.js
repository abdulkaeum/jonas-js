// Strict Mode
'use strict';

/*
let hasDrivingsLicense = false;
const passTest = true;

if (passTest) hasDrivingLicense = true; // with 'use strict' it will provide an error otherwise not
if (hasDrivingsLicense) console.log('i can drive');

const interface = 500; // // with 'use strict' will give an order
*/

// Functions declarations

/*
function logger() {
    console.log('logger');
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} and ${oranges}`;

    return juice;
}

console.log(
    fruitProcessor(1, 1),
    fruitProcessor(5, 1)
);*/

// Function Declarations vs. Expressions

/*
//Function Declarations
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge1(1991));

//Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge2(1991));
*/

// Arrow Functions

/*const calAe3 = birthYear => 2037 - birthYear;
console.log(calAe3(1991));

const yearsUntilRetire = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetire(1991));

const yearsUntilRetire2 = (birthYear, fName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${fName} in ${retirement}`;
}
console.log(yearsUntilRetire2(1991, 'bob'));
console.log(yearsUntilRetire2(1992, 'james'));

const test = () => 10 - 1;
console.log(test());*/

// Functions Calling Other Functions

/*function cutPieces(fruit){
    return fruit * 4;
}

function fruitPro(apples, oranges) {
    const applePieces = cutPieces(apples);
    return `${apples} - ${oranges} - ${applePieces}`;
}
console.log(fruitPro(2, 3));*/

// Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const fName = 'Abdul';
const abdul = [fName, 'Kaeum', 2037 - 1991, friends];
console.log(abdul);
console.log(abdul.length);

function calcAge(birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[2])
];
console.log(ages);
