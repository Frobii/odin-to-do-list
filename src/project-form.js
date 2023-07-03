import { currentProjects, project } from './project';
import populateSidebar from './project-controller';
import loadProject from './project-domtools';

const loadProjectForm = () => {
  const backdrop = document.querySelector('.main-backdrop');
  backdrop.remove();

  const newBackdrop = document.createElement('div');
  newBackdrop.classList.add('proj-form-backdrop');

  document.body.insertBefore(newBackdrop, document.body.firstChild);

  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('enable-sidebar');

  const main = document.querySelector('.main');
  const formContainer = document.createElement('form');
  formContainer.classList.add('proj-form-container');
  formContainer.setAttribute('action', ' ');
  formContainer.setAttribute('method', 'post');

  const fieldset = document.createElement('fieldset');
  fieldset.classList.add('proj-form-fieldset');
  const legend = document.createElement('legend');
  legend.textContent = 'Create a New Project...';

  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'Name Your Project';
  const projectInput = document.createElement('input');
  projectInput.maxLength = '22';
  projectInput.classList.add('project-name');

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.classList.add('project-submit-button');
  submitButton.textContent = 'SUBMIT';

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('project-cancel-button');
  cancelButton.textContent = 'CANCEL';

  main.insertBefore(formContainer, main.firstChild);

  formContainer.appendChild(fieldset);
  fieldset.appendChild(legend);

  fieldset.appendChild(projectLabel);
  fieldset.appendChild(projectInput);

  buttonContainer.appendChild(submitButton);
  buttonContainer.appendChild(cancelButton);

  fieldset.appendChild(buttonContainer);

  newBackdrop.addEventListener('click', () => {
    newBackdrop.remove();
    formContainer.remove();
  });

  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();

    newBackdrop.remove();
    formContainer.remove();
  });

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const newProject = project();

    if (projectInput.value !== '') {
      newProject.setTitle(projectInput.value);
    } else {
      projectInput.style.border = 'red';
    }

    currentProjects.projectList.push(newProject);
    currentProjects.saveProjectsToLocalStorage();

    loadProject(newProject);
    populateSidebar();
    newBackdrop.remove();
    formContainer.remove();
  });
};

export default loadProjectForm;
