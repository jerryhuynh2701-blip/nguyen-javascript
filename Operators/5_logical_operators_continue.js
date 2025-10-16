/**
 * *falsy value in JS
 * - false, 0 , "", '', ``, null, undefined, NaN
 */
// || operators return the first truthy value
console.log(false || "Bronco" || "CPP"); // bronco
console.log(true || "Bronco" || "CPP"); // bronco

// && operators return the 1st falsy value
// if all values are truthy then return the last truthy value
console.log("cal poly" && 0); // 0
console.log(1 && "CPP" && -10); // -10

// ! not
console.log(!"Bronco"); // false




