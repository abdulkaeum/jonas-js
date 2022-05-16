// TDZ (let or const) = starts at the beginning of the current scope until where defined

console.log(me); // undefined
console.log(job); // cannot access before initialising = TDZ
console.log(color); // cannot access before initialising = TDZ

var me = 'Abdul';
let job = 'teacher';
const color = 'blue';

//----------------------------------------------------------------

console.log(addDec1(2, 3)); // 5
console.log(addExpr(2, 3)); // cannot access before initialising = TDZ
console.log(addArrow(2, 3)); // cannot access before initialising = TDZ


function addDec1(a, b) {
    return a + b;
}

// function assigned to a const variable will act same as job
const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;



// summary try not use var and calling anything before initialising
// declare variables at the top of each scope duh!