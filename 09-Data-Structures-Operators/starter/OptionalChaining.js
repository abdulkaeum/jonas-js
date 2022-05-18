console.log(restaurant.openingHours.mon); // undefined / mon does not exist
console.log(restaurant.openingHours?.mon?.open); // undefined / can't read prop 'open' of undefined

// same as PHP

const days = ['mon','wed','fri'];

for (const day of days){
    //console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(day, open);
    /*mon closed
    wed closed
    fri 11*/
}

// methods

// ['Bruschetta', 'Risotto']
console.log(restaurant.order?.(1, 2) ?? 'order does not exist');
// order does not exist
console.log(restaurant.erm?.(1, 2) ?? 'order does not exist');

// check if array is empty

const users = [{
    name: 'Abdul',
    location: 'UK'
}];
// if we have an element in this case the element 0
console.log(users[0]?.name ?? 'no name');