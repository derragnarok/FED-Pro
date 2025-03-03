//Завдання 6.2 - шляпа


function middleOfNumbers(arr) { //задаю функцію з вичеслення середнього числа
    const numbers = arr.filter(item => typeof item === 'number'); // фільтрую що б були тільки числа
    // Перевіряємо, чи є числові елементи в масиві
  if (numbers.length === 0) {  // Перевіряємо, чи є числові елементи в масиві
    return 0;  // Якщо немає чисел, задаю 0
  }
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length; // вичіслюю середнє аріфметичне

}
const result = middleOfNumbers([1, 'hello', 3, true, 5,6,'kolbasa', 7, 10, null]); // задаю пример
console.log(result); // 5.33333333333333333333333