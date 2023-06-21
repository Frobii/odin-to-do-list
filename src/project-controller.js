import { currentProjects } from './project';

export default function populateSidebar() {
  const sidebar = document.querySelector('.sidebar');

  const projectListContainer = document.createElement('div');
  projectListContainer.classList.add('project-list-container');

  currentProjects.projectList.forEach((project) => {
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('sidebar-project');
    projectTitle.textContent = project.getTitle();

    projectListContainer.appendChild(projectTitle);
  });

  sidebar.appendChild(projectListContainer);
}
