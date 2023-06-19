const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

function loadBackdrop() {
  const mainBackdrop = document.createElement('div');
  mainBackdrop.classList.add('main-backdrop');
  main.appendChild(mainBackdrop);

  mainBackdrop.addEventListener('click', () => {
    mainBackdrop.remove();
    sidebar.classList.toggle('enable-sidebar');
  });
}

export default function toggleSideBar() {
  const menuButton = document.querySelector('.sidebar-button');

  menuButton.addEventListener('click', () => {
    loadBackdrop();
    sidebar.classList.toggle('enable-sidebar');
  });
}
