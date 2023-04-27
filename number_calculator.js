let num1 = prompt("Please enter any number and then press enter");
let num2 = prompt("Please enter any second number you like and then press enter")
let operator = prompt("Please type either, `Add`, `Subtract`, `Divide` or `Multiply`");

function addOrSubtract(num1, operator, num2){
    if (operator === "Add" || operator === "add"){
        console.log(Number(num1) + Number(num2));
    }
    else if (operator === "Subtract" || operator === "subtract"){
        console.log(Number(num1) - Number(num2));
    }
    else if (operator === "Divide" || operator === "divide"){
        console.log(Number(num1) / Number(num2));
    }
    else if (operator === "Multiply" || operator === "multiply"){
        console.log(Number(num1) * Number(num2));
    } else {
        console.log(Number(num1) + Number(num2));
    }
}
addOrSubtract(Number(num1), operator, Number(num2));