const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

// Додаємо нове завдання з кнопкою "видалити"
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete">Видалити</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

// Делегування подій для видалення завдань
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const li = e.target.closest('li');
    if (li) {
      li.remove();
    }
  }
});