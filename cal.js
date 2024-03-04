const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
    if (currentOperator === null) {
        if (firstOperand === null) {
            firstOperand = number;
        } else {
            firstOperand = parseFloat(`${firstOperand}${number}`);
        }
    } else {
        if (secondOperand === null) {
            secondOperand = number;
        } else {
            secondOperand = parseFloat(`${secondOperand}${number}`);
        }
    }
    display.value = currentOperator === null ? firstOperand : secondOperand;
}

function setOperator(operator) {
    if (firstOperand !== null && secondOperand !== null) {
        calculate();
    }
    currentOperator = operator;
}

function calculate() {
    if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
        let result = 0;
        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                result = firstOperand / secondOperand;
                break;
            default:
                result = 0;
        }
        display.value = result;
        firstOperand = result;
        secondOperand = null;
    }
}

function clearDisplay() {
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    display.value = '0';
}