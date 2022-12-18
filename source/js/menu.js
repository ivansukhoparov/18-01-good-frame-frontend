const navMenu = document.querySelector('.main-nav');
const navMenuToggleButton = document.querySelector('.menu-controls__toogle');

navMenuToggleButton.addEventListener('click', (() => {
  navMenuToggleButton.classList.toggle('menu-controls__toogle--closed')
  navMenuToggleButton.classList.toggle('menu-controls__toogle--opened')
  navMenu.classList.toggle('hidden')
}))


