const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const equalButton = document.querySelector("#equal");
const display = document.querySelector(".display");
const clearButton = document.querySelector("#clear");

calculator();

function add(number1,number2)
{
    number1 += number2;
    return number1.toString();
}

function subtract(number1,number2)
{
    number1 -= number2;
    return number1.toString();
}

function multiply(number1,number2)
{
    number1 *= number2;
    return number1.toString();
}

function divide(number1,number2)
{
    number1 /= number2;
    return number1.toString();
}

function operate(input)
{
    number1 = Number(input.number1);
    number2 = Number(input.number2);
    switch(input.operator)
    {
        case "+":
            input.number1 = add(number1,number2);
            break;
        case "-":
            input.number1 = subtract(number1,number2);
            break;
        case "x":
            input.number1 = multiply(number1,number2);
            break;
        case "÷":
            input.number1 = divide(number1,number2);
            break;
    }
    display.textContent = input.number1;
    input.number2 = "";
    
}

function Input()
{
    this.number1 = "";
    this.number2 = "";
    this.operator = "";
    this.currentNumber = "number1";
    this.multipleOperation = false;
    this.assignOperator = item=>
    {
        this.currentNumber = "number2";
        this.operator = item.textContent;
        display.textContent += ` ${item.textContent} `;
    };
    this.assignNumber = item=>
    {
        display.textContent += item.textContent
        if(this.currentNumber === "number1") this.number1 += item.textContent;
        else if(this.currentNumber === "number2") this.number2 += item.textContent;
    };
}

function calculator()
{
    const input = new Input();
    operators.forEach(item => item.addEventListener("click", ()=>input.assignOperator(item)));
    numbers.forEach(item => item.addEventListener("click", () => input.assignNumber(item)));
    equalButton.addEventListener("click", ()=>operate(input));
    clearButton.addEventListener("click",()=>{
        input.number1 = "";
        input.currentNumber = "number1";
        display.textContent = "";
    })
}






