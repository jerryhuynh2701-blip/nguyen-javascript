// 1. func declaration.
function saySomething(name="CSS"){
   return `I love ${name}`;
    
}

console.log(saySomething("HTML"));

// 2. functions expression
const total = function caculate(num1, num2){
    return num1 + num2;
}

console.log(total(20,40));

