// Задание 7.2

function name(t) { //функція приймає аргумент t
return function (d) {
    return  t*d; //повертає іншу функцію, яка приймає аргумент b і повертає добуток t та d.
};
}
console.log (name(5)(2)); //Буде 10