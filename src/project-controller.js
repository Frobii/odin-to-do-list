import { currentProjects } from './project';
import loadProject from './project-domtools';
import loadProjectForm from './project-form';

const projectController = () => {
  function clickProjectToLoad(projectContainer, project) {
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.createElement('div');

    projectContainer.addEventListener('click', () => {
      loadProject(project);
      backdrop.remove();
      sidebar.classList.remove('enable-sidebar');
    });
  }

  function deleteProject(projectContainer, project) {
    projectContainer.remove();

    const main = document.querySelector('.main');
    const sidebar = document.querySelector('.sidebar');

    const backdrop = document.createElement('div');
    backdrop.classList.add('main-backdrop');

    backdrop.addEventListener('click', () => {
      sidebar.classList.remove('enable-sidebar');
      backdrop.remove();
    });

    const projTitle = document.querySelector('.project-title');
    const newProjContainer = document.querySelector('.new-task-container');
    const currentTasks = document.querySelector('.current-tasks');

    const projectArray = currentProjects.projectList;
    const projIndex = projectArray.findIndex((obj) => obj.getTitle === project.getTitle);

    currentProjects.projectList.splice(projIndex, 1);

    if (currentProjects.projectList[0]) {
      loadProject(currentProjects.projectList[0]);
      main.appendChild(backdrop);
    } else {
      projTitle.remove();
      newProjContainer.remove();
      currentTasks.remove();
    }
  }

  function populateSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const newProjButton = document.querySelector('.new-project-button');

    newProjButton.addEventListener('click', () => {
      loadProjectForm();
    });

    sidebar.removeChild(sidebar.lastChild);

    const projectListContainer = document.createElement('div');
    projectListContainer.classList.add('project-list-container');

    currentProjects.projectList.forEach((project) => {
      const projectContainer = document.createElement('div');
      projectContainer.classList.add('sidebar-project');

      const projectTitle = document.createElement('div');
      projectTitle.classList.add('sidebar-project-title');

      const deleteProjButton = document.createElement('div');
      deleteProjButton.classList.add('delete-project-button');

      deleteProjButton.addEventListener('click', (event) => {
        event.stopPropagation();
        deleteProject(projectContainer, project);
      });

      projectContainer.appendChild(projectTitle);
      projectContainer.appendChild(deleteProjButton);

      projectTitle.textContent = project.getTitle();
      clickProjectToLoad(projectContainer, project);

      projectListContainer.appendChild(projectContainer);
    });

    sidebar.appendChild(projectListContainer);
  }

  return {
    populateSidebar,
  };
};

export default projectController;
