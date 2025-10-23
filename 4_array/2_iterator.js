// const studets = ["Susan", "Emily", "Jack"];

// for (let student of studets){
//     console.log("This is my fav student - " + student);
// }

// students.forEach(student => {
//     console.log("This is my fav student - " + student);
// });


// map() iterators

const numbers = [2, 5, 6, 8];
const newNumbers = numbers.map(number => {
    return number * -1;
}
);
console.log(newNumbers);

// filter()
const stuff = ['laptop', "calculator", 21, 3.14, -2, "javascript"];
const myNumbers = stuff.filter(thing => {
    return typeof thing === 'number';
});

console.log(myNumbers);

const myString = stuff.filter(word => word.length > 7);
console.log(myString);


