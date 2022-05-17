'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex){
      return [
          this.starterMenu[starterIndex],
          this.mainMenu[mainIndex]
      ];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

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
