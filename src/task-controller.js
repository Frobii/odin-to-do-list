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

export function updateDueStatus(taskProperties, dueDateElement) {
  const currentDate = new Date();
  const { dueDate } = taskProperties;

  const dueYear = Number(dueDate.substring(0, 4));
  const dueMonth = Number(dueDate.substring(5, 7));
  const dueDay = Number(dueDate.substring(8, 10));

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  if (dueYear > currentYear) {
    dueDateElement.style.color = 'green';
  } else if (dueMonth > currentMonth) {
    dueDateElement.style.color = 'green';
  } else if (dueDay > currentDay) {
    if (dueDay - currentDay >= 7) {
      dueDateElement.style.color = 'green';
    }
    if (dueDay - currentDay < 7) {
      dueDateElement.style.color = 'orange';
    }
    if (dueDay - currentDay < 2) {
      dueDateElement.style.color = 'red';
    }
  }
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

  if (taskProperties.progress === 'Complete') {
    name.classList.add('task-complete');
    description.classList.add('task-complete');
  }

  switchTaskProgress(taskProperties, name, description);

  updateDueStatus(taskProperties, due);

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
