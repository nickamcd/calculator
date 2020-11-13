const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b == 0) return undefined;
    return a / b;
}

const operate = (operator, a ,b) => operator(a, b);

const populateDisplay = input => {
    console.log(input);
    let displayBoard = document.getElementById("display");
    displayBoard.append(input);
}

let numButtons = document.querySelectorAll(".num");

numButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        populateDisplay(button.textContent);
    });
});

let opButtons = document.querySelectorAll(".op");

opButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        populateDisplay(button.textContent);
    });
});