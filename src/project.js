import loadProject from './project-domtools';
import task from './task';

const project = () => {
  const taskList = [];
  let title = '';

  function setTitle(newTitle) {
    title = newTitle;
  }

  function getTitle() {
    return title;
  }

  function newTask() {

  }

  function deleteTask() {

  }

  return {
    getTitle,
    setTitle,
    taskList,
    newTask,
    deleteTask,
  };
};

export default project;
