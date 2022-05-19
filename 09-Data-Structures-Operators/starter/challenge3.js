/*1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
    [FIRST HALF] 17: ⚽️ GOAL*/

//1.
const events = new Set(gameEvents.values());
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

//4.
console.log(gameEvents);
for (const [k, v] of gameEvents) console.log(`${k < 45 ? '[F HALF]' : '[S HALF]' } ${k}:, ${v}`);