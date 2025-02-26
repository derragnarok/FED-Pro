// Задание 6.3

function removeElement(array, item) {
    const index = array.indexOf(item); // шукаю индекс елемента
    if (index !== -1) { // перевіряємо знай дений елемент
    array.splice(index, 1); // видаляю елемент за індексом
    }
}
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 7); // прибираємо 7-ку
console.log(array); // результат - [1,3,4,6,2,5]