import taskForm from './task-form';

const taskFunctions = () => {
  function switchTaskProgress(taskProperties, name, description) {
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

  function deleteTask(taskProperties, project, taskContainer) {
    project.taskList.forEach((projTask, index) => {
      if (projTask.properties.name === taskProperties.name
        && projTask.properties.dated === taskProperties.dated
        && projTask.properties.description === taskProperties.description) {
        project.taskList.splice(index, 1);
      }
    });
    taskContainer.remove();
  }

  function editTask(taskProperties, project, taskContainer) {
    taskForm().loadForm(project);
    const taskInput = document.querySelector('.task-input');
    const descriptionInput = document.querySelector('.description-input');
    const datePicker = document.querySelector('.date-picker');
    const submitButton = document.querySelector('.submit-button');

    taskInput.value = taskProperties.name;
    descriptionInput.value = taskProperties.description;
    datePicker.value = taskProperties.dueDate;

    submitButton.addEventListener('click', () => {
      deleteTask(taskProperties, project, taskContainer);
    });
  }

  function updateDueStatus(taskProperties, dueDateElement) {
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

  return {
    updateDueStatus,
    editTask,
    switchTaskProgress,
    deleteTask,
  };
};

export default taskFunctions;
