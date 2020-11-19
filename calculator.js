// variables for storing values to evaluate
var value1 = 0;
var value2 = 0;
var operator = 0;

// Basic calculator functions
const add = (a, b) => { return a + b; }

const subtract = (a, b) => { return a - b; }

const multiply = (a, b) => { return a * b; }

const divide = (a, b) => {
    if (b == 0) return undefined;
    return a / b;
}

const operate = (operator, a ,b) => {
    switch(operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
};

// add input from button click to display
const populateDisplay = input => {
    let displayBoard = document.getElementById("display");
    displayBoard.textContent += input;
    console.log(displayBoard.textContent);
}

const clear = () => {
    console.log("clearing...");
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
        document.getElementById("display").textContent;
        populateDisplay(button.textContent);
        value1 = parseInt(document.getElementById("display").textContent.slice(0, -1));
        operator = button.textContent;
        clear();
    });
});

let evalButton = document.querySelector(".eval");

evalButton.addEventListener("click", (e) => {
    console.log("evaluating...");
    value2 = parseInt(document.getElementById("display").textContent);
    clear();
    console.log(value1);
    console.log(value2);
    console.log(operator)
    let result = operate(operator, value1, value2);
    populateDisplay(result);
});

let clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", (e) => clear());