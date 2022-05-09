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
