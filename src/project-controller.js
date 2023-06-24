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
    projectContainer.textContent = project.getTitle();
    clickProjectToLoad(projectContainer, project);

    projectListContainer.appendChild(projectContainer);
  });

  sidebar.appendChild(projectListContainer);
}
