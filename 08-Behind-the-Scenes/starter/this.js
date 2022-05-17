// this 'this' keyword will point the object that is calling it

console.log(this); // global window object, the window is calling it

const calAge = function (bDay) {
    console.log(2037 - bDay); // 2000
    console.log(this); // in strict mode = undefined / belongs in the calAge scope
}
calAge(37);

const calAgeArrow = (bDay) => {
    console.log(2037 - bDay); // 2000
    console.log(this); // global window object
    // arrow functions don't get their own 'this' keyword
    // it get's it from it's parent scope
}
calAgeArrow(37);

const jonas = {
    year: 1991,
    calAge: function () {
        // will give you the entire jonas object
        // why because the parent to the this keyword is the jonas object
        // jonas is calling the 'this' keyword
        console.log(this);
        console.log(2037 - this.year);
    }
}

jonas.calAge();

const matilda = {
    year: 2017,
}

// borrow the method from the jonas object / we do not call to copy / variable to variable
matilda.calAge = jonas.calAge;
matilda.calAge(); // outputs 20 / will use the 2017 year matilda (2037 - this.year)

const f = jonas.calAge;
f(); // the this keyword from the f() function will output 'undefined' because f() as per calAge(37);