import projectForm from './project-form';

const sidebarActivator = () => {
  function loadBackdrop(sidebar, backdrop) {
    const main = document.querySelector('.main');
    const checkExisting = document.querySelector('.main-backdrop');

    if (checkExisting) {
      backdrop.remove();
    } else {
      main.appendChild(backdrop);
    }

    backdrop.addEventListener('click', () => {
      sidebar.classList.remove('enable-sidebar');
      backdrop.remove();
    });
  }

  function toggleSideBar() {
    const sidebar = document.querySelector('.sidebar');
    const mainBackdrop = document.createElement('div');
    const menuButton = document.querySelector('.sidebar-button');
    mainBackdrop.classList.add('main-backdrop');

    menuButton.addEventListener('click', () => {
      loadBackdrop(sidebar, mainBackdrop);
      sidebar.classList.toggle('enable-sidebar');
    });

    const newProjButton = document.querySelector('.new-project-button');
    const projForm = projectForm();

    newProjButton.addEventListener('click', () => {
      projForm.loadProjectForm();
    });
  }

  return {
    toggleSideBar,
  };
};

export default sidebarActivator;
