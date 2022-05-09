const firstName = 'Jones';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jones = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jones); // I'm Jones, a 46 years old teacher!

console.log('hello \n\
world');

// ES6
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(jonasNew); // I'm Jones, a 46 years old teacher !

console.log(`hello
world`);