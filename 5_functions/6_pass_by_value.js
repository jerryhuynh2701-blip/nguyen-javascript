let num = 10;

console.log(`1. numbers = ${num}`);


function powerTwo(num){
    num **=2;
    console.log(`Inside the function: number = ${num}`);
}

powerTwo(num);
console.log(`2. numbers = ${num}`);


// pass by references
const data = {"one":1, two:2}
console.log(data);


function addNewItem(data){
    data['three'] = 3;
}

addNewItem(data);
console.log(data);

