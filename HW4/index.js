//Первое задание
const numb1 = parseFloat(prompt("Vvedi 1-e 4islo:"));
const numb2 = parseFloat(prompt("Vvvedi 2-e 4islo:"));
if (numb1 > numb2) {
    alert(`Bolshoe 4islo ${numb1}, i malenkoe 4islo ${numb2}.`);
} else if (numb1 < numb2) {
    alert(`Bolshoe 4islo ${numb2}, i malenkoe 4islo ${numb1}.`);
} else {
    alert("4isla ravny");
}
//Второе задание
const num1 = parseFloat(prompt("Vvedi rastojanie v km:"));
const num2 = parseFloat(prompt("Vvedi rastojanie v foot:"));
const distanceNum1VNum2 = num2 * 0.305 / 1000;
if (num1 < distanceNum1VNum2) {
    alert(`Malenkoe rastojanie ${num1} kms.`);
} else if (num1 > distanceNum1VNum2) {
    alert(`Malenkoe rastojanie ${distanceNum1VNum2} kms (kilometrov ot footv).`);
} else {
    alert("Ravnoe rastojanie");
}

//Третье задание
const a = parseFloat(prompt("Vvedi 4islo - a:"));
const b = parseFloat(prompt("Vvedi 4islo - b:"));
const isADivOfB = b % a === 0;
const isBDivOfA = a % b === 0;
alert(`${a} delitel ${b}? ${isADivOfB}`);
alert(`${b} delitel ${a}? ${isBDivOfA}`);

// Четвертое задание
let num = parseInt(prompt("Введи число:"));
let lastDigit = num % 10;
if (lastDigit % 2 === 0) {
    console.log(`Последняя цифра: ${lastDigit} (парна)`);
} else {
    console.log(`Последняя цифра: ${lastDigit} (непарна)`);
}
//Пятое задание
let number = parseInt(prompt("Введіть двозначне число:"));

if (number < 10 || number > 99) {
    console.log("Ошибка! Введите двозначное число.");
} else {
    let firstDigit = Math.floor(num / 10);
    let secondDigit = num % 10; 

    if (firstDigit > secondDigit) {
        console.log(`Первая цифра (${firstDigit}) больше чем вторая (${secondDigit}).`);
    } else if (firstDigit < secondDigit) {
        console.log(`Вторая  цифра (${secondDigit}) больше чем первая (${firstDigit}).`);
    } else {
        console.log(`Цифри равны: ${firstDigit} = ${secondDigit}.`);
    }
}
//Шевтое задание
let nom = parseInt(prompt("Введите трехзначное число:"));

if (nom < 100 || nom > 999) {
    console.log("Ошибка! Введите трехзначное число.");
} else {
    let firstDigit = Math.floor(nom / 100); 
    let secondDigit = Math.floor((nom % 100) / 10); 
    let thirdDigit = num % 10; 
    let sumDigits = firstDigit + secondDigit + thirdDigit;
    let productDigits = firstDigit * secondDigit * thirdDigit;
    let isSumEven = sumDigits % 2 === 0;
    let isSumDivisibleByFive = sumDigits % 5 === 0;
    let isProductGreaterThan100 = productDigits > 100;
    console.log(`Сума цифр: ${sumDigits}`);
    console.log(`Добуток цифр: ${productDigits}`);
    console.log(isSumEven ? "Сума цифр парная." : "Сума цифр непарная.");
    console.log(isSumDivisibleByFive ? "Сума цифр кратная 5." : "Сума цифр не кратная 5.");
    console.log(isProductGreaterThan100 ? "умножение цифр больше 100." : "умножение цифр не больше 100.");
}
//Седьмое задание
let nam = parseInt(prompt("Введіть тризначне число:"));

if (nam < 100 || nam > 999) {
    console.log("Помилка! Введіть тризначне число.");
} else {
    let firstDigit = Math.floor(nam / 100); 
    let secondDigit = Math.floor((nam % 100) / 10);
    let thirdDigit = nam % 10; 
    let areAllDigitsSame = (firstDigit === secondDigit && secondDigit === thirdDigit);
    let areAnyDigitsSame = (firstDigit === secondDigit || firstDigit === thirdDigit || secondDigit === thirdDigit);
    console.log(areAllDigitsSame ? "Усі цифри однакові." : "Цифри не однакові.");
    console.log(areAnyDigitsSame ? "Є однакові цифри." : "Немає однакових цифр.");
}
//Восьмое задание
let num12 = parseInt(prompt("Введите 6-значное число:"));

if (num12 < 100000 || num12 > 999999) {
    console.log("Ошибка! Введите 6-значное число:");
} else {
    
    let firstDigit = Math.floor(num12 / 100000);
    let secondDigit = Math.floor((num12 % 100000) / 10000);
    let thirdDigit = Math.floor((num12 % 10000) / 1000); 
    let fourthDigit = Math.floor((num12 % 1000) / 100); 
    let fifthDigit = Math.floor((num12 % 100) / 10); 
    let sixthDigit = num12 % 10;
    let isMirror = (firstDigit === sixthDigit) && 
                   (secondDigit === fifthDigit) && 
                   (thirdDigit === fourthDigit);

    console.log(isMirror ? "Число зеркальное." : "Число не зеркальное.");
}

