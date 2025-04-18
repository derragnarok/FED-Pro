const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();

      let hasError = false;

      // Очистити попередні помилки
      ['name', 'message', 'phone', 'email'].forEach(field => {
        document.getElementById(field + 'Error').innerText = '';
      });

      // RegEx-вирази
      const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/;
      const messageRegex = /^.{5,}$/;
      const phoneRegex = /^\+380\d{9}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!nameRegex.test(name)) {
        document.getElementById('nameError').innerText = 'Ім’я має містити лише літери';
        hasError = true;
      }

      if (!messageRegex.test(message)) {
        document.getElementById('messageError').innerText = 'Повідомлення мінімум 5 символів';
        hasError = true;
      }

      if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = 'Номер має починатись з +380 та містити 9 цифр після';
        hasError = true;
      }

      if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Email має містити @ та крапку';
        hasError = true;
      }

      if (!hasError) {
        console.log("Ім’я:", name);
        console.log("Повідомлення:", message);
        console.log("Телефон:", phone);
        console.log("Email:", email);
        alert("Форма успішно відправлена!");
        form.reset();
      }
    });