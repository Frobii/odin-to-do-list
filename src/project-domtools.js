import taskForm from './task-form';
import { switchTaskProgress } from './task-controller';

function loadExistingTasks(project) {
  const projectArray = project.taskList;
  if (projectArray.length > 0) {
    projectArray.forEach((task) => {
      const taskProperties = task.properties;

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

      // const status = document.createElement('div');
      // status.classList.add('task-status');
      // status.textContent = taskProperties.status;

      // const progress = document.createElement('div');
      // progress.classList.add('task-progress');
      // progress.textContent = taskProperties.progress;

      const description = document.createElement('div');
      description.classList.add('task-description');
      description.textContent = taskProperties.description;

      switchTaskProgress(taskProperties, name, description);

      taskListContainer.prepend(taskContainer);
      // taskContainer.appendChild(status);
      taskContainer.appendChild(name);
      taskContainer.appendChild(description);
      taskContainer.appendChild(dated);
      taskContainer.appendChild(due);
      // taskContainer.appendChild(progress);
    });
  }
}

export default function loadProject(project) {
  const main = document.querySelector('.main');

  const projectTitle = document.createElement('div');
  projectTitle.classList.add('project-title');

  projectTitle.textContent = project.getTitle();

  const newTaskContainer = document.createElement('div');
  const taskCount = document.createElement('div');
  const newTaskButton = document.createElement('div');
  newTaskContainer.classList.add('new-task-container');
  taskCount.classList.add('task-count');
  newTaskButton.classList.add('new-task-button');

  taskCount.textContent = 'Tasks:';
  newTaskButton.addEventListener('click', () => {
    taskForm().loadForm(project);
  });

  const currentTasks = document.createElement('div');
  currentTasks.classList.add('current-tasks');

  main.appendChild(projectTitle);
  main.appendChild(newTaskContainer);
  newTaskContainer.appendChild(taskCount);
  newTaskContainer.appendChild(newTaskButton);
  main.appendChild(currentTasks);

  loadExistingTasks(project);
}
