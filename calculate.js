class Calculator {
    constructor(prevElement, nextElement, operator){
        this.previousElement = prevElement;
        this.nextElement = nextElement;
        this.operator = operator;
    }

    clear(){
        this.nextElement = 0;
        this.previousElement = 0;
    }

    calculate(){
        switch(this.operator){
            case '+':
                return this.previousElement + this.nextElement;
            case '-':
                return this.previousElement - this.nextElement;
            case '*':
                return this.previousElement * this.nextElement;
            case '/':
                return this.previousElement / this.nextElement;
            case '^':
                return Math.pow(this.previousElement, this.nextElement);
        }
    }
}

//Selectors : For every elements
const btnVals = document.querySelectorAll(".val");
const outputBox = document.getElementById("outputBox");
const prevElem = document.getElementById("prevElem");
const operators = document.querySelectorAll(".operator");
const calculateBtn = document.getElementById("equalsto");
const clearBtn = document.getElementById("clearAll");
const clearOneValueBtn = document.getElementById("clearOne");

//State Values
let prevInput;
let initInput;
let op = '';

btnVals.forEach((btn) => {
    btn.onclick = () => {
        //Update DOM
        outputBox.value += btn.innerText;
        
        //Update variable
        initInput = parseInt(outputBox.value);
    }
})

function operateInput(opTxt) {
    prevInput = parseInt(outputBox.value);
    prevElem.innerText = opTxt;
    prevElem.style.display = 'flex';
    outputBox.value = '';
    initInput = 0;
    op = opTxt;
}

operators.forEach(operator => {
    if(outputBox.value !== 0) {
        operator.onclick = () => {
            operateInput(operator.innerText);
        }
    }
})

//Calculate the value
calculateBtn.onclick = () => {
    console.log(initInput, prevInput);
    const Element = new Calculator(prevInput, initInput, op);
    const finalValue = Element.calculate();
    outputBox.value = finalValue;
}

//Clear the data
clearBtn.onclick = () => {
    outputBox.value = '';
    prevElem.innerText = '';
    prevElem.style.display = 'none';
}

//Clear One value of input
clearOneValueBtn.onclick = () => {
    let val = outputBox.value;
    val = val.split("");
    val = val.slice(0, val.length - 1);
    outputBox.value = val.join("");
}