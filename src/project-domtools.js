import taskForm from './task-form';
import taskDomtools from './task-domtools';

const projectDomtools = () => {
  function loadExistingTasks(project) {
    const { taskList } = project;
    if (taskList.length > 0) {
      taskList.forEach((task) => {
        const taskProperties = task.properties;
        taskDomtools().displayTask(taskProperties, project);
      });
    }
  }

  function loadProject(project) {
    const main = document.querySelector('.main');
    main.innerHTML = '';

    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');

    projectTitle.textContent = project.title;

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

  return {
    loadProject,
  };
};

export default projectDomtools;
