import handleSubmit from './task-controller';

const taskForm = () => {
  function loadBackdrop() {
    const formBackdrop = document.createElement('div');
    formBackdrop.classList.add('form-backdrop');
    document.body.appendChild(formBackdrop);

    const main = document.querySelector('.main');
    formBackdrop.addEventListener('click', () => {
      formBackdrop.remove();
      main.removeChild(main.firstChild);
    });
  }

  function dateToday() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const todaysDate = `${day}/${month}/${year}`;
    return todaysDate;
  }

  function loadForm(project) {
    loadBackdrop();

    const main = document.querySelector('.main');
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');

    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Create a New To Do...';

    const taskLabel = document.createElement('label');
    taskLabel.textContent = 'Name Your Task';
    const taskInput = document.createElement('input');
    taskInput.classList.add('task-input');

    const dateContainer = document.createElement('div');
    dateContainer.classList.add('date-container');

    const dueLabel = document.createElement('label');
    dueLabel.classList.add('date-labels');
    dueLabel.textContent = 'Due Date:';
    const datePicker = document.createElement('input');
    datePicker.classList.add('date-picker');
    datePicker.type = 'date';

    const dateLabel = document.createElement('label');
    dateLabel.classList.add('date-labels');
    dateLabel.textContent = 'Date Created:';
    const dateInput = document.createElement('div');
    dateInput.classList.add('date-today');
    dateInput.textContent = dateToday();

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('description-input');

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('submit-button');
    submitButton.textContent = 'SUBMIT';

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-button');
    cancelButton.textContent = 'CANCEL';

    main.insertBefore(formContainer, main.firstChild);

    formContainer.appendChild(fieldset);
    fieldset.appendChild(legend);

    fieldset.appendChild(taskLabel);
    fieldset.appendChild(taskInput);

    fieldset.appendChild(dateContainer);

    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);

    dateContainer.appendChild(dueLabel);
    dateContainer.appendChild(datePicker);

    fieldset.appendChild(descriptionLabel);
    fieldset.appendChild(descriptionInput);

    fieldset.appendChild(descriptionLabel);
    fieldset.appendChild(descriptionInput);

    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);

    fieldset.appendChild(buttonContainer);

    formContainer.addEventListener('submit', (event) => {
      handleSubmit(event, project);
    });
  }

  return {
    loadBackdrop,
    loadForm,
  };
};

export default taskForm;
