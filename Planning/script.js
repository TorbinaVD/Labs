const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let taskId = 0;

function addTask(event) 
{
  event.preventDefault();
  const taskText = taskInput.value;//текст задачи
  if (taskText.trim() !== '') 
  {
    const taskItem = document.createElement('li');//списка  контент
    taskItem.classList.add('task');
    taskItem.innerHTML = taskText;
    taskItem.dataset.id = taskId++;
    taskItem.addEventListener('click', markTaskComplete);//выполнили задачу
    const deleteButton = document.createElement('button');//кнопка удалить
    deleteButton.innerHTML = 'X';
    taskItem.classList.add('del');
    deleteButton.addEventListener('click', deleteTask);//удаляем задачу
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);//добавляем в список
    taskInput.value = '';//ввод пуст
  }
}

function resetText(event)
{
  event.preventDefault();
  taskInput.value = '';
}

function markTaskComplete(event)
{
  const taskItem = event.target;
  taskItem.classList.toggle('complete');
  event.stopPropagation();
}

function deleteTask(event)
{
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
  event.stopPropagation();
}

taskForm.addEventListener('submit', addTask);
taskForm.addEventListener('reset', resetText);
