const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equalButton = document.querySelector("#equal");
const display = document.querySelector(".display");
const clearButton = document.querySelector("#clear");

calculator();

function add(input)
{
    input.number1 += input.number2;
    display.textContent = input.number1;
    input.number2 = null;
}

function subtract(input)
{
    input.number1 -= input.number2;
    display.textContent = input.number1;
    input.number2 = null;
}

function multiply(input)
{
    input.number1 *= input.number2;
    display.textContent = input.number1;
    input.number2 = null;
}

function divide(input)
{
    if(input.number2!==0)
    {
        input.number1 /= input.number2;
        display.textContent = input.number1;
        input.number2 = null;
    }
}

function operate(input)
{
    switch(input.operator)
    {
        case "+":
            add(input);
            break;
        case "-":
            subtract(input);
            break;
        case "x":
            multiply(input);
            break;
        case "÷":
            divide(input);
            break;
    }
}

function Input()
{
    this.number1 = null;
    this.number2 = null;
    this.operator = "";
    this.assignOperator = item=>
    {
        this.operator = item.textContent;
        display.textContent += item.textContent;
    };
    this.assignNumber = item=>
    {
        if(this.number1 === null)
        {
            this.number1 = Number(item.textContent);
            display.textContent = item.textContent;
        } 
        else
        {
            this.number2 = Number(item.textContent);
            display.textContent += item.textContent;
        }  
    };
}

function calculator()
{
    const input = new Input();
    operators.forEach(item => item.addEventListener("click", ()=>input.assignOperator(item)));
    numbers.forEach(item => item.addEventListener("click", ()=>input.assignNumber(item)));
    equalButton.addEventListener("click", ()=>operate(input));
    clearButton.addEventListener("click",()=>{
        input.number1 = null;
        display.textContent = "";
    })
}






