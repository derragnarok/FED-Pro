function Student(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;

    this.getAge = function () {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    };

    this.getAverageGrade = function () {
      if (this.grades.length === 0) return 0;
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    };

    this.present = function () {
      if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex++] = true;
      }
    };

    this.absent = function () {
      if (this.attendanceIndex < 25) {
        this.attendance[this.attendanceIndex++] = false;
      }
    };

    this.summary = function () {
      const averageGrade = this.getAverageGrade();
      const attended = this.attendance.filter(item => item === true).length;
      const totalMarked = this.attendance.filter(item => item !== null).length;
      const attendanceRate = totalMarked ? attended / totalMarked : 0;

      if (averageGrade > 90 && attendanceRate > 0.9) return "Молодець!";
      if (averageGrade > 90 || attendanceRate > 0.9) return "Добре, але можна краще";
      return "Редиска!";
    };
  }

  // Створюємо студентів
  const student1 = new Student("Вася", "Петров", 2000, [95, 92, 88, 100]);
  const student2 = new Student("Додік", "Додіков", 1999, [70, 75, 80, 65]);
  const student3 = new Student("Олег", "Вінник", 1996, [91, 94, 96, 93]);

  for (let i = 0; i < 20; i++) student1.present();
  for (let i = 0; i < 5; i++) student1.absent();

  for (let i = 0; i < 10; i++) student2.present();
  for (let i = 10; i < 25; i++) student2.absent();

  for (let i = 0; i < 25; i++) student3.present();

  const studentList = [student1, student2, student3];

  const container = document.getElementById("students");

  studentList.forEach(student => {
    const card = document.createElement("div");
    card.className = "student-card";
    card.innerHTML = `
      <h2>${student.firstName} ${student.lastName}</h2>
      <p><strong>Вік:</strong> ${student.getAge()}</p>
      <p><strong>Середній бал:</strong> ${student.getAverageGrade().toFixed(2)}</p>
      <p><strong>Відвідуваність:</strong> ${student.attendance.filter(a => a === true).length} з 25</p>
      <p class="summary">${student.summary()}</p>
    `;
    container.appendChild(card);
  });