import task from './task';

export function switchTaskProgress(taskProperties, name, description) {
  name.addEventListener('click', () => {
    if (taskProperties.progress === 'In Progress') {
      name.classList.add('task-complete');
      description.classList.add('task-complete');
      taskProperties.progress = 'Complete';
    } else {
      name.classList.remove('task-complete');
      description.classList.remove('task-complete');
      taskProperties.progress = 'In Progress';
    }
  });
  description.addEventListener('click', () => {
    if (taskProperties.progress === 'In Progress') {
      name.classList.add('task-complete');
      description.classList.add('task-complete');
      taskProperties.progress = 'Complete';
    } else {
      name.classList.remove('task-complete');
      description.classList.remove('task-complete');
      taskProperties.progress = 'In Progress';
    }
  });
}

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

export function displayTask(taskProperties) {
  const taskListContainer = document.querySelector('.current-tasks');

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');

  const name = document.createElement('div');
  name.classList.add('task-name');
  name.textContent = taskProperties.name;

  const dated = document.createElement('div');
  dated.classList.add('task-dated');
  dated.innerHTML = `Created<br>${taskProperties.dated}`;

  const due = document.createElement('div');
  due.classList.add('task-due');
  due.innerHTML = `Due<br>${taskProperties.dueDate}`;

  const description = document.createElement('div');
  description.classList.add('task-description');
  description.textContent = taskProperties.description;

  switchTaskProgress(taskProperties, name, description);

  taskListContainer.prepend(taskContainer);
  taskContainer.appendChild(name);
  taskContainer.appendChild(description);
  taskContainer.appendChild(dated);
  taskContainer.appendChild(due);
}

export function displayNewestTask(project) {
  const newestTask = project.taskList[0].properties;

  displayTask(newestTask);
}
