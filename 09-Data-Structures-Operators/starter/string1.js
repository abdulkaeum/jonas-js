console.log(`#### Strings part 1`);

const airplane = 'TAP Air Portugal'
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log('abc'[2]); // c

console.log(airplane.length); // 16
console.log('abc'.length); // 3

// position of occurrence
console.log(airplane.indexOf('r')); // 6
console.log(airplane.lastIndexOf('r')); // 10
console.log(airplane.indexOf('Portugal')); // 8 portugal = -1

// extract a part of a string / just like substr() in PHP
console.log(airplane.slice(4)); // Air Portugal
console.log(airplane.slice(4, 7)); // Air
console.log(airplane.slice(0, airplane.indexOf(' '))); // TAP
console.log(airplane.slice(-2)); // al

const checkMiddleSeat = function (seat) {
    // B and E and middle seat
    const s = seat.slice(-1);
    console.log(`${ s === 'B' || s === 'E' ? 'YES' : 'NO'}`);
}
checkMiddleSeat('11B'); // YES
checkMiddleSeat('23C'); // NO
checkMiddleSeat('3E'); // YES

console.log(typeof new String('Abdul')); // object
// converted from a primitive to an object so we can use these methods
