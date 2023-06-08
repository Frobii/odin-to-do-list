const task = () => {
  const properties = {
    name: '',
    dated: '',
    dueDate: '',
    status: 'new',
    progress: 'pending',
    description: '',
  };

  function setName(newName) {
    properties.name = newName;
  }

  function getName() {
    return properties.name;
  }

  function rename(newName) {
    properties.name = newName;
  }

  function deleteTask() {

  }

  return {
    properties,
    setName,
    getName,
    rename,
    deleteTask,
  };
};

export default task;
