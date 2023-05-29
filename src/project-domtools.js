export default function loadProject(project) {
  const main = document.querySelector('.main');

  const projectTitle = document.createElement('div');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = project.getTitle();

  const newTaskContainer = document.createElement('div');
  const taskCount = document.createElement('div');
  const newTaskButton = document.createElement('button');
  newTaskContainer.classList.add('new-task-container');
  taskCount.classList.add('task-count');
  newTaskButton.classList.add('new-task-button');

  const currentTasks = document.createElement('div');
  currentTasks.classList.add('current-tasks');

  main.appendChild(projectTitle);
  main.appendChild(newTaskContainer);
  newTaskContainer.appendChild(taskCount);
  newTaskContainer.appendChild(newTaskButton);
  main.appendChild(currentTasks);
}

// THIS USED TO BE A FACTORY FUNCTION
//   return {
//     main,
//     projectTitle,
//     taskCount,
//     newTaskButton,
//     currentTasks,
//   };

// export default loadProject;
