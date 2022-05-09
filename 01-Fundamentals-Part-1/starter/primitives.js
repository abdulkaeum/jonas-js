// 6 types (number, string, boolean, undefined, null, bigInt)
/* dynamic data typing much like PHP */

let $number = 23;
let $number_dec = 23.1;
let fName = 'Abdul';
let $boolen = true;
let $notDefined;
let $Null = null;
let $bigInt = 123456789023456789; //ES2020

console.log(
    $number,
    $number_dec,
    fName,
    $boolen,
    $notDefined,
    $Null,
    $bigInt
);

console.log(
    typeof $number,
    typeof $number_dec,
    typeof fName,
    typeof $boolen,
    typeof $notDefined,
    typeof $Null,
    typeof $bigInt,
    typeof 'text',
    typeof 23
);

//jonas; //ncaught ReferenceError: jonas is not defined

// re-assign a data type & example of dynamic typing
$boolen = 'YES!';
console.log(typeof $boolen);
console.log($boolen);

let year;
console.log(typeof year, year); // undefined undefined
year = 2022;
console.log(typeof year, year);

// error in the typeof operator
console.log(typeof null);

