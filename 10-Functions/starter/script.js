'use strict';

// How Passing Arguments Works: Value[stack] vs. Reference[heap]

// example 1
const flight = 'LH234';
const abdul = {
    name: 'Abdul Kaeum',
    passport: 1234567890,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'creates a new var';
    passenger.name = 'object is referenced ' + passenger.name;

    passenger.passport === 1234567890
        ? alert('Check in')
        : alert('Wrong passport');
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