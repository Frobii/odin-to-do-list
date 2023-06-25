import { currentProjects } from './project';
import loadProject from './project-domtools';
import toggleSideBar from './sidebar';

function clickProjectToLoad(projectContainer, project) {
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.createElement('div');

  projectContainer.addEventListener('click', () => {
    loadProject(project);
    backdrop.remove();
    sidebar.classList.remove('enable-sidebar');
  });
}

export default function populateSidebar() {
  const sidebar = document.querySelector('.sidebar');

  const projectListContainer = document.createElement('div');
  projectListContainer.classList.add('project-list-container');

  currentProjects.projectList.forEach((project) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('sidebar-project');

    const projectTitle = document.createElement('div');
    projectTitle.classList.add('sidebar-project-title');

    const deleteProjButton = document.createElement('div');
    deleteProjButton.classList.add('delete-project-button');

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(deleteProjButton);

    projectTitle.textContent = project.getTitle();
    clickProjectToLoad(projectContainer, project);

    projectListContainer.appendChild(projectContainer);
  });

  sidebar.appendChild(projectListContainer);
}
