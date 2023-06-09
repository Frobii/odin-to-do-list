import task from './task';

export default function handleSubmit(event) {
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
