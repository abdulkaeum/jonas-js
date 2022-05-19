console.log(`1...............................`);
for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

console.log(`2...............................`);
let total = 0;
const odds = Object.entries(game.odds); ////[Array(2), Array(2), Array(2)]
for (const [name, odd] of odds) {
    //console.log(odd, number); //team1 1.33
    total += odd;
}
console.log(`average odd ${Math.trunc(total / odds.length)}`);

console.log(`3...............................`);
//console.log(Object.entries(game.odds)); //[Array(2), Array(2), Array(2)]
for (const [key, value] of Object.entries(game.odds)) {
    //console.log(key, value); //team1 1.33
    const team = key === 'x' ? 'draw' : 'victory ' + game[key];
    console.log(`Odd of ${team}: ${value}`);
}