const user = {
    name: "Роман",
    age: 29,
    city: "Берлін",
    occupation: "Розробник",
  
    displayInfo: function() {
      const info = `
        <strong>Ім’я:</strong> ${this.name}<br>
        <strong>Вік:</strong> ${this.age}<br>
        <strong>Місто:</strong> ${this.city}<br>
        <strong>Професія:</strong> ${this.occupation}
      `;
      document.getElementById('userInfo').innerHTML = info;
    },
  
    updateInfo: function() {
      const name = prompt("Введіть ім’я:", this.name);
      const age = prompt("Введіть вік:", this.age);
      const city = prompt("Введіть місто:", this.city);
      const occupation = prompt("Введіть професію:", this.occupation);
  
      if (name) this.name = name;
      if (age) this.age = age;
      if (city) this.city = city;
      if (occupation) this.occupation = occupation;
  
      this.displayInfo(); // оновити інфо після зміни
    }
  };
  