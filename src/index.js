import _, { isNil } from 'lodash';
import './style.css';
import task from './task';
import { project, currentProjects } from './project';
import projectDomtools from './project-domtools';
import sidebarActivator from './sidebar-activator';
import sidebarTools from './sidebar-domtools';

const savedProjectsData = localStorage.getItem('currentProjects');

if (savedProjectsData) {
  const savedProjects = JSON.parse(savedProjectsData);
  currentProjects.projectList = savedProjects.projectList;
} else {
  const newTask = task();
  newTask.properties.name = 'Walk the dog';
  newTask.properties.dated = '2023-07-09';
  newTask.properties.dueDate = '2023-07-09';
  newTask.properties.description = 'Make sure to pat him lots afterwards and check his food/water.';

  const newTask2 = task();
  newTask2.properties.name = 'Water my plants';
  newTask2.properties.dated = '2023-07-09';
  newTask2.properties.dueDate = '2023-07-09';
  newTask2.properties.description = 'Feed my vine some root growth hormone (use with caution).';

  const newTask3 = task();
  newTask3.properties.name = 'See the sunset';
  newTask3.properties.dated = '2023-07-09';
  newTask3.properties.dueDate = '2023-07-09';
  newTask3.properties.description = 'Pick Her up from work and see the sunset after a hike.';

  const myProject = project();
  myProject.title = 'Enjoy Sunday';
  myProject.taskList.unshift(newTask, newTask2, newTask3);

  currentProjects.projectList[0] = myProject;
}

sidebarActivator().toggleSideBar();
sidebarTools().populateSidebar();
projectDomtools().loadProject(currentProjects.projectList[0]);
