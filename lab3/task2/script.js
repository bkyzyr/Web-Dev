const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const totalElement = document.getElementById('total');
const doneElement = document.getElementById('done-total');

let totalTasks = 0;
let doneTasks = 0;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') {
        return;
    }

    addTodoItem(taskText);
    input.value = '';
});

function updateTotals() {
    totalElement.textContent = "total: " + totalTasks;
    doneElement.textContent = "total of done tasks: " + doneTasks;
}

function addTodoItem(text) {
    totalTasks++;

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const leftSection = document.createElement('div');
    leftSection.className = 'todo-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'todo-text';

    checkbox.addEventListener('change', function () {
        span.classList.toggle('done');

        if (checkbox.checked) {
            doneTasks++;
        } else {
            doneTasks--;
        }

        updateTotals();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', function () {
        if (checkbox.checked) {
            doneTasks--;
        }

        totalTasks--;
        todoList.removeChild(listItem);
        updateTotals();
    });

    leftSection.appendChild(checkbox);
    leftSection.appendChild(span);

    listItem.appendChild(leftSection);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);

    updateTotals();
}
