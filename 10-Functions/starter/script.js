'use strict';

console.log('#### - How Passing Arguments Works: Value[stack] vs. Reference[heap]');

// example 1
const flight = 'LH234';
const abdul = {
    name: 'Abdul Kaeum',
    passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'creates a new var';
    passenger.name = 'object is referenced ' + passenger.name;

    /*passenger.passport === 1234567890
        ? alert('Check in')
        : alert('Wrong passport');*/
};

checkIn(flight, abdul); // alert('Check in')

console.log(flight); // flight is still LH234 (flight is not flightNum, flightNum is a new var in the stack)
// flight = primitive type (string)
// flightNum is a 'copy' of flight therefore we did not modify flight
// same as flightNum = flight

console.log(abdul); // abdul.name is modified because objects are passed by reference
// abdul = reference type (object)
// passenger becomes a 'reference' to abdul in the heap therefore will be modified

// example 2
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
}

// different functions manipulating the same abdul object
// this will cause a huge issue in big apps
// as when one function changes abdul it may cause issues when another function needs to use abdul
// need to be aware and careful
newPassport(abdul);
checkIn(flight, abdul); // alert('Wrong passport');

// passing by value / passing by reference in js
// JS does not support passing by reference!!!! wtf
// confusing as when passing an object to a function as per above, JS has passed by ref!

console.log('#### - First-Class and Higher-Order Functions');
// not the same thing
//--// First-Class functions = 1st class citizens
// they are simply just values, another 'type' of object
// as they are values we can store them in vars or object props
//--// Higher-Order Functions
// First-Class functions allow us to write Higher-Order Functions
// Higher-Order Functions = the parent function
// Higher-Order Functions = receives a function as an argument or returns a new function

// Higher-Order Functions - A Function Accepting A Callback Function:
const oneWord = function (str){
    return str.replace(/ /g, '').toLowerCase() // javascriptisnotthebest!
};

const upperFirstWord = function (str){
    const [fWord, ...others] = str.split(' ');
    return [fWord.toUpperCase(), ...others].join(' ');
};
// the higher order func
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`); // Original string: JavaScript is not the best!
    console.log(`Transform string: ${fn(str)}`); // Transform string: JAVASCRIPT is not the best!
    console.log(`Transform by: ${fn.name}`); // Transform string: upperFirstWord
}
transformer('JavaScript is not the best!', upperFirstWord)
transformer('JavaScript is not the best!', oneWord);
