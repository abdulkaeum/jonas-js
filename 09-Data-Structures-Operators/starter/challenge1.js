const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1.
const [players1, players2] = [game.players[0], game.players[1]];
const players = [...players1, ...players2];
console.log(players);

// answer / meant to create players1, players2
// const [players1, players2] = [game.players];

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [game.players[0], game.players[1]];
console.log(allPlayers);

// answer
// const = allPlayers = [...players1, ...players2];

//4.
const playersFinal = [...game.players[0], 'new1', 'new2', 'new3'];
console.log(playersFinal);

//5.
const [t1, draw, t2] = [game.odds.team1, game.odds.x, game.odds.team2];
console.log(t1, draw, t2);

// answer
// const = {odds: {team1, x: draw, team2}} = game;

//6.

// answer
const printGoals2 = function (...players) {
    console.log(players.length);
    for (let i = 0; i < players.length; i++) {
        console.log(players[i]);
    }
};

printGoals2(...game.scored)
printGoals2('abdul','kaeum')

//7.
// Short Circuiting (&& and ||)