//Завдання 7,1


let totalSum = 0; // глобальна змінна для збереження суми

function sum(value) {
    totalSum += value;
    return totalSum;
}

// Приклад використання:
console.log(sum(3)); // 3
console.log(sum(8)); // 11
console.log(sum(15)); // 26
console.log(sum(20)); // 46
