let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "0";

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");
const backspaceButton = document.querySelector(".backspace");

function updateDisplay() {
    display.textContent = displayValue;
}

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (displayValue === "0" || operator && secondNumber === "") {
            displayValue = button.textContent;
        } else {
            displayValue += button.textContent;
        }
        operator ? secondNumber += button.textContent : firstNumber += button.textContent;
        updateDisplay();
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber && secondNumber) {
            calculate();
        }
        operator = button.textContent;
        displayValue += " " + operator + " ";
        updateDisplay();
    });
});

equalsButton.addEventListener("click", calculate);

function calculate() {
    if (!firstNumber || !operator || !secondNumber) return;
    let result;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num2 === 0 ? "Error" : num1 / num2; break;
    }
    displayValue = String(Math.round(result * 100) / 100);
    firstNumber = displayValue;
    secondNumber = "";
    operator = "";
    updateDisplay();
}

clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    displayValue = "0";
    updateDisplay();
});

decimalButton.addEventListener("click", () => {
    if (!displayValue.includes(".")) {
        displayValue += ".";
        operator ? secondNumber += "." : firstNumber += ".";
        updateDisplay();
    }
});

backspaceButton.addEventListener("click", () => {
    displayValue = displayValue.slice(0, -1) || "0";
    operator ? secondNumber = secondNumber.slice(0, -1) : firstNumber = firstNumber.slice(0, -1);
    updateDisplay();
});

document.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        document.querySelector(`button.number:nth-child(${+e.key + 4})`).click();
    } else if ("+-*/".includes(e.key)) {
        document.querySelector(`button.operator:nth-child(${e.key === "+" ? 12 : e.key === "-" ? 16 : e.key === "*" ? 8 : 7})`).click();
    } else if (e.key === "Enter" || e.key === "=") {
        equalsButton.click();
    } else if (e.key === "Backspace") {
        backspaceButton.click();
    } else if (e.key === "Escape") {
        clearButton.click();
    } else if (e.key === ".") {
        decimalButton.click();
    }
});

updateDisplay();
