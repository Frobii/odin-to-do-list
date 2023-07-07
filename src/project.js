const currentProjects = (() => {
  const projectList = [];

  return {
    projectList,
  };
})();

const project = () => {
  const taskList = [];
  let title = '';

  title = '';

  return {
    taskList,
    title,
  };
};

export {
  currentProjects,
  project,
};
