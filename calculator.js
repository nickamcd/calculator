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
}

let buttons = document.getElementsByClassName("num");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", populateDisplay(buttons[i].textContent));
}
