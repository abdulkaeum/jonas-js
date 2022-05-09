const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('this is true');
} else {
    const yearsLeft = 18 - age;
    console.log(`wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(century);