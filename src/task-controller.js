import task from './task';

export default function handleSubmit(event, project) {
  event.preventDefault();

  const newTask = task();
  const name = document.querySelector('.task-input').value;
  newTask.setName(name);

  console.log(newTask.getName());
}
