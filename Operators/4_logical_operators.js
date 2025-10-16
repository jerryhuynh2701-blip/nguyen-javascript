
console.log(true || false);
console.log(false || false);


const age = 15;
const passDMVExam = true;
const getDriverLincese = age >= 16 && passDMVExam;
console.log(getDriverLincese);

console.log(!getDriverLincese);

// nullish coalescing operator:??
// provide a default value if the operand befroe the ?? is false
// return the right hand side value if the left-hand value is null or undefined

let user= null;
const username = user ?? 'default user';
const dummyUsername = (user != null && user !== undefined ? user : 'default user')
console.log(`username: ${username}`);


