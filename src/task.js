const task = () => {
  const properties = {
    name: '',
    dated: '',
    dueDate: '',
    status: 'new',
    progress: 'pending',
  };

  function rename(newName) {
    properties.name = newName;
  }

  return {
    properties,
    rename,
  };
};

export default task;
