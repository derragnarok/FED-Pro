let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.querySelector(".js--todos-wrapper");
  if (!taskList) return;

  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (task.completed) li.classList.add("todo-item--checked");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleComplete(index);

    const span = document.createElement("span");
    span.className = "todo-item__description";
    span.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo-item__delete";
    deleteBtn.textContent = "Видалити";
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask(text) {
  if (text) {
    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".js--form");
  const input = document.querySelector(".js--form__input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
      addTask(text);
      input.value = "";
    }
  });

  renderTasks();
});
