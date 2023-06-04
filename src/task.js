const task = () => {
  const properties = {
    name: '',
    dated: '',
    dueDate: '',
    status: 'new',
    progress: 'pending',
    description: '',
  };

  function rename(newName) {
    properties.name = newName;
  }

  function deleteTask() {

  }

  return {
    properties,
    rename,
    deleteTask,
  };
};

export default task;
