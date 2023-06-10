import task from './task';

export function handleSubmit(event) {
  event.preventDefault();

  const name = document.querySelector('.task-input').value;
  const dateToday = document.querySelector('.date-today').textContent;
  const dueDate = document.querySelector('.date-picker').value;
  const description = document.querySelector('.description-input').value;

  const newTask = task();
  newTask.properties.name = name;
  newTask.properties.dated = dateToday;
  newTask.properties.dueDate = dueDate;
  newTask.properties.description = description;

  return newTask;
}

export function displayNewTask(project) {
  const newestTask = project.taskList[0].properties;

  const taskListContainer = document.querySelector('.current-tasks');

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');

  const name = document.createElement('div');
  name.classList.add('task-name');
  name.textContent = newestTask.name;

  const dated = document.createElement('div');
  dated.classList.add('task-dated');
  dated.innerHTML = `Created<br>${newestTask.dated}`;

  const due = document.createElement('div');
  due.classList.add('task-due');
  due.innerHTML = `Due<br>${newestTask.dueDate}`;

  // const status = document.createElement('div');
  // status.classList.add('task-status');
  // status.textContent = newestTask.status;

  // const progress = document.createElement('div');
  // progress.classList.add('task-progress');
  // progress.textContent = newestTask.progress;

  const description = document.createElement('div');
  description.classList.add('task-description');
  description.textContent = newestTask.description;

  taskListContainer.prepend(taskContainer);
  // taskContainer.appendChild(status);
  taskContainer.appendChild(name);
  taskContainer.appendChild(description);
  taskContainer.appendChild(dated);
  taskContainer.appendChild(due);
  // taskContainer.appendChild(progress);
}
