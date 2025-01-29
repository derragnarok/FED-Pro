//ДЗ 5
let birthYear = prompt("Введите год рождения:");
if (birthYear === null) {
    alert("Жаль, что Вы не ввели свой год Рождения.");
} else {
    let city = prompt("В каком городе Вы живете?");
    if (city === null) {
        alert("Жаль, что Вы не ввели свой город.");
    } else {

        let sport = prompt("Який ваш любимый вид спорта?");
        if (sport === null) {
            alert("Жаль, что Вы не ввели свой любимый вид спорта.");
        } else {
 
            let age = new Date().getFullYear() - birthYear;

            let cityMessage = "";
            if (city === "Берлин") {
                cityMessage = "Ти живеш у столице Германии, Берлин.";
            } else if (city === "Вашингтон") {
                cityMessage = "Ти живеш у столице США, Вашингтон.";
            } else if (city === "Лондон") {
                cityMessage = "Ти живеш у столиці Англии, Лондон.";
            } else {
                cityMessage = `Ти живеш у городе ${city}.`;
            }

            let sportMessage = "";
            if (sport === "футбол") {
                sportMessage = "Круто! Хочеш стать Лионелем Месси?";
            } else if (sport === "баскетбол") {
                sportMessage = "Круто! Хочеш стать Майклом Джорданом?";
            } else if (sport === "теніс") {
                sportMessage = "Круто! Хочеш стать Роджером Федерером?";
            } else {
                sportMessage = `Ти любиш ${sport}.`;
            }

            alert(`Ваш возраст: ${age} лет.\n${cityMessage}\n${sportMessage}`);
        }
    }
}
