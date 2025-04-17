let savedLink = ''; // Глобальна змінна для зберігання посилання та перенаправлення

document.addEventListener('DOMContentLoaded', function () {
  const setLinkButton = document.getElementById('setLinkButton');
  const goToLinkButton = document.getElementById('goToLinkButton');

  setLinkButton.addEventListener('click', function () {
    const link = prompt('Введіть посилання (URL):');
    if (link && link.trim() !== '') {
      // Перевіримо, чи починається з http/https:

      savedLink = link.startsWith('http://') || link.startsWith('https://') ? link : `https://${link}`;
      alert(`Посилання збережено: ${savedLink}`);
    } else {
      alert('Посилання не введено.');
    }
  });

  goToLinkButton.addEventListener('click', function () {
    if (savedLink) {
      window.location.href = savedLink;
    } else {
      alert('Посилання не задано. Спочатку натисніть "Ввести посилання".');
    }
  });
});
