import _ from 'lodash';
import './style.css';
import project from './project';
import loadProject from './project-domtools';

const myProject = project();
myProject.setTitle('My Project');
loadProject(myProject);
