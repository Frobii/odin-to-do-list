import _ from 'lodash';
import './style.css';
import { currentProjects } from './project';
import projectDomtools from './project-domtools';
import sidebarActivator from './sidebar-activator';
import sidebarTools from './sidebar-domtools';

const savedProjectsData = localStorage.getItem('currentProjects');
if (savedProjectsData) {
  const savedProjects = JSON.parse(savedProjectsData);
  currentProjects.projectList = savedProjects.projectList;
}

sidebarActivator().toggleSideBar();
sidebarTools().populateSidebar();
projectDomtools().loadProject(currentProjects.projectList[0]);
