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
const calAe3 = birthYear => 2037 - birthYear;
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
console.log(test());