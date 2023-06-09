const task = () => {
  const properties = {
    name: '',
    dated: '',
    dueDate: '',
    status: 'New',
    progress: 'In Progress',
    description: '',
  };

  function checkStatus() {

  }

  return {
    properties,
    checkStatus,
  };
};

export default task;
