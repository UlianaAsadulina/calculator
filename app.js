const screen = document.querySelector(".calcScreen");
const number = document.querySelector(".number");
const operator = document.querySelector(".operator");

let calc = 0;
let oprtr = '';
let isOperator = false;


function addOnScreen(caracter) {
    if (screen.textContent === '0' || isOperator===true) {
        screen.textContent = caracter;
    } else {
        screen.textContent += caracter;
    }  
   
}

let firstN;

function getOperator (character) {
    // operator.classList.add('operatorSelected');
    oprtr = character;
    isOperator=true;
    firstN=Number(screen.textContent);
    console.log(oprtr);
    return firstN; 
}

function handleCalculateClick () {
    // console.log(calc);
    let secondN=Number(screen.textContent);
    if (oprtr==='+')
        calc= firstN + secondN;
    if (oprtr==='-')
        calc = firstN - secondN;
    if (oprtr==='x')
        calc = firstN*secondN;
    if (oprtr==='÷')
        calc=firstN/secondN;
    screen.textContent = calc;
    return calc;
}

function handleClearClick () {
    screen.innerHTML = "";
    return calc = 0;
}

document.querySelector(".clear").addEventListener("click", handleClearClick);
document.querySelector(".calculate").addEventListener("click", handleCalculateClick);
