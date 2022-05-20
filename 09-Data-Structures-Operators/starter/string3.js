console.log(`#### Strings part 3`);

// split = php explode
console.log('a+very+nice+string'.split('+')); //['a', 'very', 'nice', 'string']
const [fName, lName] = 'abdul kaeum'.split(' '); // ['abdul', 'kaeum']

// join = php implode
console.log(['Mr', fName, lName.toUpperCase()].join('-')); // Mr-abdul-KAEUM

const capitaliseName = function (fullName) {
    const names = fullName.split(' ');
    const fixed = [];

    for (const parts of names) {
        fixed.push(parts[0].toUpperCase() + parts.slice(1));
    }
    return fixed.join(' ');
};

console.log(capitaliseName('abdul kaeum')); // Abdul Kaeum

// padding = str_pad
const msg = 'hello'.padStart(9, '+');
console.log(msg); // ++++hello

// repeat
const msg2 = 'Bad weather... All departures delayed';
console.log(msg2.repeat(2));