const jonas = {
    // we are not in a scope, as an object we are in the global scope

    fName: 'Abdul',
    year: 1991,
    calAge: function () {
        // will give you the entire jonas object
        // why because the parent to the this keyword is the jonas object
        // jonas is calling the 'this' keyword
        console.log(this); // this will work as it's derived from a method
        console.log(2037 - this.year);
        const isMili = function () {
            console.log(this.year === 1991); // this is undefined as it's derived from a reg function use an arrow instead
        };
        isMili();
    },
    greet: function () {console.log(`Hey ${this.fName}`)}, // will work
    greet2: () => console.log(`Hey ${this.fName}`), // will be undefined
};

// arrow function does not get it's own this keyword, it wil be global_scope.keyword / global = window
jonas.greet(); // Hey undefined
console.log(jonas.fName); // undefined
jonas.calAge(); // can't read property year of undefined line 13

// so on the window object there is no fName so we get undefined
// summary: never use arrow function as a method / just use reg function
// but if you can use an arrow with a method because the this keyword will be derived from the parent which in that case will be the method/it's parent


// --------------------------------------------------------------

const addExp = function (a, b) {
    console.log(arguments); // an array of arguments / only available on the reg func
    return a + b;
}
addExp(2, 5)
