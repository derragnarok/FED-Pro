//Первое задание
const userName = prompt( "What is ur name?" );
alert(`Hello, ${userName}! How r u?`);
//Второе задание
const num1 = parseFloat(prompt("Enter 1st number"));
const num2 = parseFloat(prompt("Enter 2ns number"))

const sum = num1 + num2;
const dif = num1 - num2;
const product = num1 * num2;
const quot = num1 / num2;

alert(`Results:
1. Additional: ${num1} + ${num2} = ${sum}
2. Defference: ${num1} - ${num2} = ${dif}
3. Multi: ${num1} * ${num2} = ${product}
4. Div: ${num1} / ${num2} = ${quot}`);

//Третье задание

const number1 = prompt("enter 1-st number:");
const number2 = prompt("enetr 2-nd numer:");
const isEqual = num1 === num2;
alert(`Are the values equal? ${isEqual}`);

//Четвертое задание
const nom1 = parseFloat(prompt("Enter 1 nomer"));
const nom2 = parseFloat(prompt("Enter 2 nomer"));
const nom3 = parseFloat(prompt("Enter 3 nomer"));

const middle = (nom1 + nom2 + nom3) / 3;

alert(`the middle of ${nom1}, ${nom2}, ${nom3} is ${middle}`);



// Пятое задание
let number = parseInt(prompt("Enter a five-digit number:"));

if (number >= 10000 && number <= 99999) {
    const digit1 = Math.floor(number / 10000);
    number %= 10000;
    const digit2 = Math.floor(number / 1000);
    number %= 1000;
    const digit3 = Math.floor(number / 100);
    number %= 100;
    const digit4 = Math.floor(number / 10);
    const digit5 = number % 10;


    alert(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`);}
 else { alert("Please enter a valid five-digit number.");}