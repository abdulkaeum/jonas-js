const age = 18;

// both sides are equal and of same type
if(age === 18) console.log('18'); // 18
if('18' == 18) console.log('loose'); // loose
if('18' === 18) console.log('strict');

const colour = prompt('colour?');
console.log(typeof colour, colour); //string 23

if(colour == 23) { // '23' == 23
    // js will convert the '23' to 23
    // prints 23 because we used == which does type coercion so 23 == 23 = true
    console.log('23', 'A'); // 23 A
}

if(colour === 23) { // string == 23
    // js will not convert the '23' to 23
    console.log('23', 'B');
}

if(Number(colour) === 23) {
    console.log('23', 'C'); // 23 C
}