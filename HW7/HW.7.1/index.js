//Завдання 7,1


let totalSumm = 0; // глобальна змінна для збереження суми

function sum(value) {
    totalSumm += value;
    return totalSumm;
}

// Приклад використання:
console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 16
console.log(sum(7)); // 23
