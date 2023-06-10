import _ from 'lodash';
import './style.css';
import project from './project';
import loadProject from './project-domtools';
import task from './task';

const newTask = task();
newTask.properties.name = 'test';
newTask.properties.dated = '26-06-23';
newTask.properties.dueDate = '30-06-23';
newTask.properties.description = 'Testing the styling so this is going to be quite a long string quite a long string quite a long string quite a long string quite a long string.';

const myProject = project();
myProject.setTitle('My Project');
myProject.taskList.unshift(newTask);
loadProject(myProject);
