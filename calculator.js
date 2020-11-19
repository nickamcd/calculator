// variables for storing values to evaluate
let value1;
let value2;
let operand;

// Basic calculator functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b == 0) return undefined;
    return a / b;
}

const operate = (operator, a ,b) => operator(a, b);

const populateDisplay = input => {
    let displayBoard = document.getElementById("display");
    displayBoard.textContent += input;
    console.log(displayBoard.textContent);
}

const clear = () => {
    document.getElementById("display").innerHTML = "";
};


// Add event listeners to each button
let numButtons = document.querySelectorAll(".num");

numButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        populateDisplay(button.textContent);
    });
});

let opButtons = document.querySelectorAll(".op");

opButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        document.querySelector("display").textContent;
        populateDisplay(button.textContent);
        value1 = document.querySelector("display").textContent;
        operand = button.textContent
        console.log(value1);
        console.log(operand);
        clear();
    });
});

let evalButton = document.querySelector(".eval");

evalButton.addEventListener("click", (e) => {
    console.log("evaluating...");
    value2 = document.querySelector("display").textContent;
    console.log(operate(operand, value1, value2));
});

let clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", (e) => clear());