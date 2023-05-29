import loadProject from './project-domtools';
import task from './task';

export default function project(name) {
  const taskList = Array.new;

  this.name = name;

  function newTask() {

  }

  function rename() {

  }

  return {
    name,
    taskList,
    newTask,
  };
}
