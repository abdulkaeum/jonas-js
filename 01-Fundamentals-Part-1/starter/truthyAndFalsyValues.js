/* falsy
0,
'',
undefined,
null,
NaN
 */

console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Abdul')); // true
console.log(Boolean({})); // true

const money = 0; // number but is falsy
if (money) {
    console.log(Boolean(money), '>0');
} else {
    console.log(Boolean(money), '0'); // false '0'
}