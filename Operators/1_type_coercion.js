// -- 1. When using + operator AND one perand is a strng
// --- JS will converts to a string ---
console.log("5" + 10);
console.log(true + "10");
console.log(null + "$");

console.log("------------")
// --- 2. JS converts a value to a numner when ---
// --- you use arthmetic operators (EXCEPT + operator) ---
console.log("5" * 10);
console.log("0.5" ** 2);

// --- you can also use comparision operators (<, <=, >, >=)
console.log("5">3);
console.log(true < 10);

/* special cases
true = 1
false = 0
underfined is NaN
null is 0
NaN ** 0 = 1
*/
let num1;
console.log(num1 / 10);

let num2 = null;
console.log(num2 / 5);

console.log(NaN ** 0);










