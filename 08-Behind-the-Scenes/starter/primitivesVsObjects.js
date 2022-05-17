let year = 2022;
let lastYear = year;
year = 2023;
console.log(year); // 2023
console.log(lastYear); // 2022

const me = {
    name: 'Abdul',
    year: 2022,
}

const friend = me;
friend.year = 2000;

console.log('Me', me); // Abdul 2000 / changed from 2022 to 2000
console.log('Friend', friend); // Abdul 2000

// js engine:
// primitive = callstack
// objects = heap


//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types
const jessica = {
    fName: 'Jessica',
    lName: 'Williams',
    age: 23,
};

// looks like copying the entire object here
// behind the scene we are just copying the reference that will point to the same object = jessica
// in other words it did not create a new object in the heap
// it made a ref in the call stack to the id in the heap
// finally it's the same memory address pointer in the heap
const marriedJess = jessica;
marriedJess.lName = 'Davis';
console.log('Before marriage', jessica); // Jessica Davis
console.log('After marriage', marriedJess);  // Jessica Davis

//marriedJess = {} not allowed

//copying objects
const jessica2 = {
    fName: 'Jessica',
    lName: 'Williams',
    age: 23,
};

// merge objects and return a new one
const jessicaCopied = Object.assign({}, jessica2);
jessicaCopied.lName = 'now we have changed it';
console.log('Before marriage', jessica2); // Jessica Williams
console.log('After marriage', jessicaCopied);  // Jessica now we have changed it

// Object.assign only creates a shallow copy not a deep copy