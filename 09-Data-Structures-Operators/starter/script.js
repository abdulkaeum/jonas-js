console.log(`spread operator = to expand an array to all it's elements`)
// used to pass args into function or building new array
// vs Destructuring / spread does not create variables and spreads out all elements of an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 5, 6, 7];
console.log(arr2); // 6)[1, 2, 3, 5, 6, 7]
console.log(...arr2); // 1, 2, 3, 5, 6, 7

// building new array with added element
const newMenu = [...restaurant.mainMenu, 'food'];
console.log(newMenu); // (4)['Pizza', 'Pasta', 'Risotto', 'food']

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']

// combine array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// the spread works on all iterable
const str = 'Jonas';
const letters = [...str, ' ', 's.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 's.']
console.log(...str); // J o n a s

// passing spread into a function
const ingredients = [
    //prompt('Enter pasta 1'),
    //prompt('Enter pasta 2'),
    //prompt('Enter pasta 3')
];
console.log(ingredients); // ['a', 'b', 'c']
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // ings:  1 2 3
restaurant.orderPasta(...ingredients); // 'a', 'b', 'c' / ings:  1 2 3

// add to object
const newRest = {foundYear: '2022', ...restaurant, founder: 'Abdul'};
console.log(newRest);

// copy shallow
const restCopy = {...restaurant};
restCopy.name = 'Only Italiano';
console.log(restaurant.name); // Classico Italiano
console.log(restCopy.name); // Only Italiano

// Rest Pattern and Parameters = the opposite to a spread
const add = function (...numbers) { // packing
    console.log(numbers); // array of numbers
}
add(1, 2, 2); // [1, 2, 2]
add(2, 3, 4, 5, 6, 6); // [2, 3, 4, 5, 6, 6]

// un-packing
const x = [23, 5, 7];
add(...x); // 23, 5, 7 // returns [23, 5, 7] by the packing

// one (4)['two', 'three', 'four', 'five']
restaurant.orderPizza('one', 'two', 'three', 'four', 'five');

// Short Circuiting (||)
// you can use ANY data type, they can return ANY data type
// short-circuiting: the first [truthy] value is returned
console.log(3 || 'Abdul'); // 3
console.log('' || 'Abdul'); // Abdul
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello

restaurant.numGuests = 23;
// instead of restaurant.numGuests ? restaurant.numGuests : 10
const guests = restaurant.numGuests || 10;
console.log(guests); // 23

// Short Circuiting (&&)
// short Circuiting using the && operator does the opposite: the first [falsey] value is returned
console.log(0 && 'Abdul'); // 0
console.log(7 && 'Abdul'); // Abdul

// The Nullish Coalescing Operator (??)
// Nullish = null and undefined (NOT 0 OR '')
restaurant.numGuests = 0; // 0 is a not a null or undefined value
const guests1 = restaurant.numGuests || 10;
console.log(guests1); // 10 / should be 0

//if left operands is null and undefined return the right unless otherwise
const guests2 = restaurant.numGuests ?? 10;
console.log(guests2); // 0

// New Logical Assignment Operators
const rest1 = {
    name: 'name1',
    numGuests: 20,
};
const rest2 = {
    name: 'name2',
    location: 'UK',
};

// rest1.numGuests = rest1.numGuests || 10; // 20
// rest2.numGuests = rest2.numGuests || 10; // 10
// OR Assignment Operator: assigns a value to a variable if that variable is [falsy]
rest1.numGuests ||= 10; // 20
rest2.numGuests ||= 10; // 10 (rest2.numGuests is falsy)

// but if rest1.numGuests was 0 guests then you don't want to assign the default value of 10
// instead of ||= we should use the The Nullish Coalescing Assignment Operator
rest2.numGuests ??= 10

// we also have the &&= // assigns a value to a variable if it's [truthy]
rest2.location &&= '<NA>';

/*
// call object method and pass in 'one' object
restaurant.orderDelvery({
  time: '22:30',
  address: '6 Leo rd',
  mainIndex: 2,
  startIndex: 2
});

// Destructuring objects {}

// using the property names
const {name, openingHours, categories} = restaurant;
console.log('using the property names', name, openingHours, categories); //

// renaming the property names to own variables
const {name: mYname, location: mYlocation} = restaurant;
console.log('rename property names', mYname, mYlocation); //

// default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log('menu does not exist', menu, starters);  // [] 4['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
// {a, b} = obj; // error
({a, b} = obj);
console.log(a, b); // 23 7

// nested objects
const { fri } = restaurant.openingHours;
const { fri: { open, close } } = restaurant.openingHours;
console.log(fri); // {open: 11, close: 23}
console.log(open, close); // 11, 23*/


/*
//Destructuring Arrays []

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring / unpacking Arrays
const [x, y, z] = arr;
console.log('Destructuring arr', x, y, z); // 1 2 3
console.log('Original arr', arr); // (3)[1, 2, 3]

// restaurant
let [first, second] = restaurant.categories;
console.log('Destructure any 1st 2', first, second); // Italian Pizzeria
const [Italian, , ,Organic] = restaurant.categories;
console.log('Leave a hole for those to be skipped', Italian, Organic); // Italian Organic

console.log('before reversing them', second, first); // Pizzeria Italian
// no temp variable needed to swap
[first, second] = [second, first];
console.log('reverse them', second, first); // Italian Pizzeria

console.log(restaurant.order(2, 0)); // (2)['Garlic Bread', 'Pizza']
const [garlicBread, pizza] = restaurant.order(2, 0);
console.log('from a function', garlicBread, pizza); // Garlic Bread Pizza

// nested array
const nested = [1, 2, [3, 4]];
const [d, , e] = nested;
console.log('Destructuring nested array', d, e); // 1 (2)[3, 4]
const [f, , [g, h]] = nested;
console.log('Destructuring with Destructuring', f, g, h); // 1 3 4

// unknown Destructuring
const [i, j, k] = [3, 4];
console.log('unknown Destructuring', i, j, k) // 3 4 undefined

// set default values
const [l = 1, m = 2, n = 3] = [3];
console.log('unknown Destructuring', l, m, n) // 3 2 3
*/

console.log(`####: Sets = always unique values`)
const orderSet = new Set(['one', 'two', 'two', 'three', 'four', 'one']);
console.log(orderSet); // Set(4) {'one', 'two', 'three', 'four'}
console.log(new Set('Abdul')) // Set(5) {'A', 'b', 'd', 'u', 'l'}
console.log(orderSet.size) // 4
console.log(orderSet.has('one')); // true
orderSet.add('bread');
orderSet.add('bread');
orderSet.delete('three');
console.log(orderSet); // Set(5) {'one', 'two', 'four', 'bread'}
// Sets do not have indexes so we can't retrieve a part of it i.e orderSet[0] won't work
// instead we use the .has() method
// use an array instead if you need to retrieve data
// .clear will clear the entire set
for (const order of orderSet)  console.log(order);

// use case - main use case of sets is to remove dups from arrays
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// Set(3) {'Waiter', 'Chef', 'Manager'}
// (3) ['Waiter', 'Chef', 'Manager'] after using the spread
console.log(new Set('Abdul')); // Set(5) {'A', 'b', 'd', 'u', 'l'}

console.log(`####: Maps = more useful than sets, map values to keys`)
// data is stored with key to values
// maps can have any data types as their keys

const rest = new Map();
// fill the map
rest.set('name', 'UK');
rest.set(1, 'country');
rest
    .set(2, [1,2,3])
    .set(true, ['a','b','c']);

// check the map
console.log(rest); // {'name' => 'UK', 1 => 'country', 2 => Array(3), true => Array(3)}
console.log(rest.get('name')); // UK
console.log(rest.get(true)); //  ['a','b','c']
console.log(rest.has('name')) // true

// the use of having booleans as keys
rest
    .set('open', 11)
    .set('close', 13)
    .set(true, 'we are open')
    .set(false, 'we are closed');
const time = 21;
// condition will return a boolean
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // we are closed

// manipulate
rest.delete('name')
console.log(rest.size) // the number of items
rest.clear() // Map(0) {}

console.log(`####: Which Data Structure to Use?`)
// simple list  = [arrays] or sets - just values but can manipulate data with their methods
// key value pairs = [objects] / maps - object have functions/this and maps have different data types as keys

