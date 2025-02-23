//Завдання 6.1
function removeChars(str, charsToRemove) {
    // Перетворюємо масив символів у рядок
    const regex = new RegExp(`[${charsToRemove.join('')}]`, 'g');
    // Замінюємо всі символи, що є у масиві, на порожній рядок
    return str.replace(regex, '');
  }
  
  // Приклад використання:
  const result = removeChars(" hello world", ['l', 'd']);
  console.log(result);  // "heo wor"
  