// Looping Arrays: The for-of Loop
const myMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of myMenu) console.log(item);
/*Focaccia
Bruschetta
Garlic Bread
Caprese Salad
Pizza
Pasta
Risotto*/

// looping over objects

// prop name/keys
console.log(Object.keys(openingHours)); // ['thu', 'fri', 'sat']
console.log(Object.keys(openingHours).length); // 3
let l = Object.keys(openingHours).length;
let openStr = `We are open ${l} days: `;
for (const day of Object.keys(openingHours)) {
    //console.log(day);
    openStr += `${day}, `;
    /*thu
    fri
    sat*/
}
//console.log(openStr);

// prop values
const values = Object.values(openingHours);
//console.log(values);

// entire object
const entries = Object.entries(openingHours);
//console.log(entries);

for (const [key, {open, close}] of entries) {
    //console.log(x); // ['thu', {…}]
    console.log(`on ${key} we are open ${open} - ${close}`);
}