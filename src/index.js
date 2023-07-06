import _ from 'lodash';
import './style.css';
import { currentProjects, project } from './project';
import projectDomtools from './project-domtools';
import task from './task';
import sidebarUtilities from './sidebar';
import sidebarTools from './sidebar-tools';

sidebarUtilities().toggleSideBar();

const newTask = task();
newTask.properties.name = 'test';
newTask.properties.dated = '2023-06-18';
newTask.properties.dueDate = '2023-06-26';
newTask.properties.description = 'Testing the styling so this is going to be quite a long string quite a long string quite a long string quite a long string quite a long string.';

const newTask2 = task();
newTask2.properties.name = 'test2';
newTask2.properties.dated = '2023-02-02';
newTask2.properties.dueDate = '2023-08-02';
newTask2.properties.description = 'Testing the styling so this is going to be quite a long string quite a long string quite a long string quite a long string quite a long string.';

const myProject = project();
myProject.setTitle('My Project');
myProject.taskList.unshift(newTask);

const myProject2 = project();
myProject2.setTitle('My Project 2');
myProject2.taskList.unshift(newTask2);

projectDomtools().loadProject(myProject);

currentProjects.projectList.push(myProject);
currentProjects.projectList.push(myProject2);

sidebarTools().populateSidebar();
