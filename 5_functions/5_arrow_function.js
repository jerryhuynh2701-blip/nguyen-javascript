const total = function(num1, num2){
    return num1 + num2;
}

const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(20,10));


/*
arroow function
const variableName = (para1, para2) =>{
    .......
    } 
1. zero parameter
const funcName = () -> {...}

2. one parameter
const funcName = (para) => {...} OR
const funcName = para => {...}

3. two or more parameters
const funcName = (para1, para2, para3) => {...}

4. single line block: do Not need {} and No return keyword
const sum (num1, num2) -> num1 + num2;

5. multiple line block: does need the return keyword

const PowerThree = num => {
    if (typeof num === "number"){
    num = num * num;
        return num * num;
    }
*/

// function isChristmas(){
//     const today = new Date();
//     return today.getMonth === 12 && today.getDate() === 25;
// }

// const isChristmas2 = () => {
//     const today = new Date();
//     return today.getMonth === 12 && today.getDate() === 25;
// };

// console.log(isChristmas());
