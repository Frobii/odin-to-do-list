import taskFunctions from './task-functions';

const taskDomtools = () => {
  function displayTask(taskProperties, project) {
    const taskListContainer = document.querySelector('.current-tasks');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const name = document.createElement('div');
    name.classList.add('task-name');
    name.textContent = taskProperties.name;

    const due = document.createElement('div');
    due.classList.add('task-due');
    due.innerHTML = `Due<br>${taskProperties.dueDate}`;

    const deleteTaskButton = document.createElement('div');
    deleteTaskButton.classList.add('delete-task-button');

    const editTaskButton = document.createElement('div');
    editTaskButton.classList.add('edit-task-button');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('task-button-container');

    buttonContainer.appendChild(editTaskButton);
    buttonContainer.appendChild(deleteTaskButton);

    const description = document.createElement('div');
    description.classList.add('task-description');
    description.textContent = taskProperties.description;

    if (taskProperties.progress === 'Complete') {
      name.classList.add('task-complete');
      description.classList.add('task-complete');
    }

    editTaskButton.addEventListener('click', () => {
      taskFunctions().editTask(taskProperties, project, taskContainer);
    });

    deleteTaskButton.addEventListener('click', () => {
      taskFunctions().deleteTask(taskProperties, project, taskContainer);
    });

    taskFunctions().switchTaskProgress(taskProperties, name, description);

    taskFunctions().updateDueStatus(taskProperties, due);

    taskListContainer.prepend(taskContainer);
    taskContainer.appendChild(name);
    taskContainer.appendChild(description);
    taskContainer.appendChild(due);
    taskContainer.appendChild(buttonContainer);
  }

  function displayNewestTask(project) {
    const newestTask = project.taskList[0].properties;

    displayTask(newestTask, project);
  }

  return {
    displayNewestTask,
    displayTask,
  };
};

export default taskDomtools;
