const taskForm = () => {
  function loadBackdrop() {
    const formBackdrop = document.createElement('div');
    formBackdrop.classList.add('form-backdrop');
    document.body.appendChild(formBackdrop);

    const main = document.querySelector('.main');
    formBackdrop.addEventListener('click', () => {
      formBackdrop.remove();
      main.removeChild(main.firstChild);
    });
  }

  function loadForm() {
    const main = document.querySelector('.main');
    const formContainer = document.createElement('form-container');
    formContainer.classList.add('form-container');
    // const fieldset = document.createElement('fieldset');
    // const label = document.createElement('label');

    main.insertBefore(formContainer, main.firstChild);
    // formContainer.appendChild(fieldset);
    // fieldset.appendChild(label);
  }

  return {
    loadBackdrop,
    loadForm,
  };
};

export default taskForm;
