let firstNum;
let secondNum;
let operation;
let sum;
let num1 = document.querySelectorAll(".");
let num2 = parseInt(prompt("What number2?"));

function operate(op) {
  if (op === "+") {
    add(num1, num2);
  } else if (op === "-") {
    subtract();
  } else if (op === "*") {
    multiply();
  } else if (op === "/") {
    divide();
  } else console.log("ERROR");

  return sum;
}

console.log(operate("+"));

function add(a, b) {
  sum = a + b;
}
function subtract(a, b) {
  sum = a - b;
}
function multiply(a, b) {
  sum = a * b;
}
function divide(a, b) {
  sum = a / b;
}
