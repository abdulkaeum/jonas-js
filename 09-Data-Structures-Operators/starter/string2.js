console.log(`#### Strings part 2`);

const airplane = 'TAP Air Portugal'

console.log(airplane.toLowerCase());
console.log(airplane.toUpperCase());

// fix name
const passenger = 'aBdUl';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0]
    .toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// compare name
const email = 'hello@abdul.com';
const loginEmail = '  Hello@Abdul.com \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = loginEmail.trim();
const chainEmail = loginEmail
    .toLowerCase()
    .trim(); // hello@abdul.com
email === chainEmail; // true

// replacing
const priceGB = '288,97£'
const priceUS = priceGB
    .replace('£','$')
    .replace(',','.');


// Booleans
const plane = 'A320neo';
plane.includes('A320'); //  true
plane.startsWith('A'); //  true
plane.endsWith('neo'); //  true

