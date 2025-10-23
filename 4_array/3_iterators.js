const numbers = [1, 1, 2, 2];
const total = numbers.reduce((acc, currVal) => {
    return acc + currVal;
})

console.log(total);

// let accumulator = 0;
// for(let number of numbers){
//     accumulator +=number;
// }

// console.log(accumulator);

const nested = [[100,2] ,  [3,4]];

const flatArray = nested.reduce((acc, currArray) => {
    for (let value of currArray){
        acc.push(value);
    }
    return acc;
}, [] );

console.log(flatArray); 

const students = [
    {name: "Alex", age: 21},
    {name: "Sam", age: 10},
    {name: "Siri", age:21},
];
 const groupStudentsByAge = students.reduce((acc, student)=>{
    if (acc[student.age]){
        acc[student.age].push(student);
    } else{
        acc[student.age] = [student];
    }
    return acc;
 }, {});

 console.log(groupStudentsByAge);
 