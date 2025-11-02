//mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('block');
});


// activity
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


//
function renderTasks() {
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center bg-gray-200 px-4 py-2 rounded-lg';
    li.innerHTML = `
      <span>${task}</span>
      <button
        class="text-red-500 hover:text-red-700"
        onclick="deleteTask(${index})"
      >
        Delete
      </button>
    `;
    todoList.appendChild(li);
  });
}

// Add 
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task) {
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    todoInput.value = '';
    renderTasks();
  }
});

// Delete
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();

