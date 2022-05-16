'use strict';

function calAge(birthYear) {
    // fName is not found in local scope so JS looks up out of the current scope and finds/access fName
    // even though fName is defined after calAge()
    console.log(fName); // Abdul

    // age is available in calAge scope and any inner/child scopes
    const age = 2037 - birthYear;

    printAge();

    function printAge(){
        // age and birthyaer not in scope = look up a level to find
        let output = `name: ${fName}, age: ${age}, birth year: ${birthYear}`;
        console.log(output); // name: Abdul, age: 37, birth year: 2000

        if (birthYear >= 2000){
            var mill = true;

            // creating a new variable
            const fName = 'Kaeum' //if used fName will = Kaeum and not Abdul - use 1st available

            // this will print because JS keeps looking up in the scope(s) to find the vars
            const str = `block scope: name: ${fName}, age: ${age}, birth year: ${birthYear}`;

            console.log(str); // block scope: name: Kaeum, age: 37, birth year: 2000

            function add(a, b) {
                return a + b;
            }

            // console.log(output) on line 40 this will print 'overriding output'
            output = 'overriding output';

            // console.log(output) on line 40 this will print 'name: Abdul, age: 37, birth year: 2000'
            // const output = 'name: Abdul, age: 37, birth year: 2000';
        }

        console.log(output);
        console.log(mill); // will work as var is function scope (i.e printAge()) not block scope
        // console.log(str); // str is not defined (here) const and let are block scope
        // console.log(add(1, 2)); //is not defined (here)
    }
    //printAge(); // will also work here as in scope as within scope

    return age;
}

const fName = 'Abdul';
calAge(2000); // JS will do a lookup in the scope to find fName
// const fName = 'Abdul'; // initialization here will give an error for calAge()
// printAge(); // printAge is not defined (here)
// console.log(age); // age is not defined (here)

// look within scope to find or look up
// variables are accessible from parent scope(s)
// variables are not accessible from outside the scope(s) where they are defined