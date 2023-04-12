const navMenu = document.querySelector('.main-nav');
const navMenuToggleButton = document.querySelector('.menu-controls__toogle');
const toogleText = navMenuToggleButton.querySelector('.menu-controls__button-text');

navMenuToggleButton.addEventListener('click', (() => {
  navMenuToggleButton.classList.toggle('menu-controls__toogle--closed')
  navMenuToggleButton.classList.toggle('menu-controls__toogle--opened')
  navMenu.classList.toggle('hidden');

  if (navMenu.classList.contains('hidden')) {
    toogleText.textContent = "открыть меню";
  } else {
    toogleText.textContent = "закрыть меню";
  }
}))


