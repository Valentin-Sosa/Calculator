const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equalButton = document.querySelector("#equal");
const displayOperation = document.querySelector(".operation");
const displayResult = document.querySelector(".result");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");

calculator();

function operate(input)
{
    let number1 = Number(input.number1);
    let number2 = Number(input.number2);
    switch(input.operator)
    {
        case "+":
            input.result = number1 + number2;
            break;
        case "-":
            input.result = number1 - number2;
            break;
        case "x":
            input.result = number1 * number2;
            break;
        case "÷":
            input.result = number1 / number2;
            break;
    }
}

function processOperation(input)
{   
    input.operation = displayOperation.textContent.split(" ");
    let operatorIndex = input.operation.findIndex(operator => operator === "x" || operator === "÷");
    while(operatorIndex !== -1)
    {
        input.assign(operatorIndex);
        operate(input);
        input.operation.splice((operatorIndex-1),3,input.result);
        operatorIndex = input.operation.findIndex(operator => operator === "x" || operator === "÷");
    }
    while(input.operation.length > 1)
    {
        operatorIndex = input.operation.findIndex(operator => operator === "+" || operator === "-");
        input.assign(operatorIndex);
        operate(input);
        input.operation.splice((operatorIndex-1),3,input.result);
    }
    displayResult.textContent = input.result;
    input.pastOperation = true;
}

function Input()
{
    this.number1 = "";
    this.number2 = "";
    this.operator = "";
    this.result = 0;
    this.operation = null;
    this.pastOperation = false;

    this.assign = operatorIndex =>
    {
        this.operator = this.operation[operatorIndex];
        this.number1 = this.operation[operatorIndex-1];
        this.number2 = this.operation[operatorIndex+1];
    };

    this.inputOperator = item =>
    {
        if(!this.pastOperation) displayOperation.textContent += ` ${item.textContent} `;
        else
        {
            displayOperation.textContent = `${this.result} ${item.textContent} `;
            displayResult.textContent = "";
            this.pastOperation = false;
        } 
    }

    this.inputNumber = item =>
    {
        if(!this.pastOperation) displayOperation.textContent += item.textContent;
        else
        {
            displayOperation.textContent = item.textContent;
            displayResult.textContent = "";
            this.pastOperation = false;
        }
    }
}

function calculator()
{
    const input = new Input();
    operators.forEach(item => item.addEventListener("click",()=>input.inputOperator(item)));
    numbers.forEach(item => item.addEventListener("click",()=>input.inputNumber(item)));
    equalButton.addEventListener("click", ()=>processOperation(input));
    clearButton.addEventListener("click",()=>{
        displayOperation.textContent = "";
        displayResult.textContent = "";
    });
    deleteButton.addEventListener("click", 
                                ()=> displayOperation.textContent = 
                                displayOperation.textContent.slice(0,displayOperation.textContent.length-1));
    
}






