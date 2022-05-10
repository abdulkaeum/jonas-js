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

/*const friends = ['Michael', 'Steven', 'Peter'];
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
console.log(ages);*/

// Array Operations (Methods)

/*const friends = ['Michael', 'Steven', 'Peter'];

// add elements
const jay = friends.push('Jay');
console.log(friends, jay);
friends.unshift('John');
console.log(friends);

// remove elements

const popped = friends.pop();
console.log(friends);
console.log(popped);
friends.shift();
console.log(friends);

// check indexes

console.log(friends.indexOf('Steven')); // index 1
console.log(friends.indexOf('Bob')); // -1 Bob does not exist
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false

if (friends.includes('Peter')) {
    console.log('yes');
}*/


// Objects

// JS does not support associative arrays!
/*
const abdulArray = [
    'Abdul',
    'Kaeum',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];

// use objects to assign keys to data
const abdul = {
    fName: 'Abdul',
    lName: 'Kaeum',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter']
};

// retrieve object values (dot vs bracket notation)
console.log(abdul);
console.log(abdul.fName);
console.log(abdul['fName']);
const keyName = 'Name';
console.log(abdul['f' + keyName], abdul['l' + keyName]);
console.log(`${abdul.fName} has ${abdul.friends.length} friends and his best friend is ${abdul.friends[0]}`);

const str = prompt('enter');
if (abdul[str]) {
    console.log(abdul[str]);
} else {
    console.log('no');
}

// add to object
abdul.job = 'F1 Racer'
abdul['fname'] = 'Hamilton';
abdul.newPropLocation = 'Brazil';
console.log(abdul);*/

/*const abdul = {
    fName: 'Abdul',
    lName: 'Kaeum',
    age: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    license: true,
    calAge1: function (year) {
        return 2037 - year;
    },
    calAge2: function () {
        return 2037 - this.age;
    },
    calAge3: function () {
        this.age = 2037 - this.age;
        return this.age;
    },
    info: function () {
        return `${this.fName} is a ${this.calAge3()} year old ${this.job}, and has ${this.license ? 'a' : 'no'} license`;
    }
}

console.log(abdul.calAge1(abdul.age));
console.log(abdul.calAge2());
//console.log(abdul.calAge3());
console.log(abdul.age);
console.log(abdul.info())

const abdulStats = {
    name: 'Abdul Kaeum',
    height: 1.69,
    mass: 78,
    calcBmi: function () {return this.bmi = this.mass / this.height ** 2;},
    //calcBmi: () => this.bmi = this.mass / this.height ** 2
};

abdulStats.calcBmi();
console.log(abdulStats.bmi);*/

// for loop

/*
for (let i = 1; i <= 10; i++) {
    console.log(`hello world ${i}`);
}*/

// Looping Arrays

const abdulArray = [
    'Abdul',
    'Kaeum',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];

const types = [];

for (let i = 0; i < abdulArray.length; i++) {
    console.log(abdulArray[i], typeof abdulArray[i]);
    if(typeof abdulArray[i] !== 'string') continue;
    types.push(typeof abdulArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);
