// Looping Arrays: The for-of Loop
const myMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const item of myMenu) console.log(item);