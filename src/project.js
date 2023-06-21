const currentProjects = (() => {
  const projectList = [];
  return {
    projectList,
  };
})();

const project = () => {
  const taskList = [];
  let title = '';

  function setTitle(newTitle) {
    title = newTitle;
  }

  function getTitle() {
    return title;
  }

  function deleteTask() {

  }

  return {
    taskList,
    setTitle,
    getTitle,
    deleteTask,
  };
};

export {
  currentProjects,
  project,
};
