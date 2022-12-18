const BUTTONS_LIST = ['plan', 'complectation', 'gallery']

const background = document.querySelector('.page__background');
const cardLayers = document.querySelectorAll('.content__card');

const openButtons = document.querySelectorAll('.controls__button');
const closeButton = document.querySelector('#layer-close');

//footer elements
const footerElements = [document.querySelector('#footer-logo'),
document.querySelector('#footer-controls'),
document.querySelector('#footer-contacts')]

//functions for making blur background
const blurBackground = function () {
  background.style.filter = 'blur(10vh)';
}
const unBlurBackground = function () {
  background.style.filter = 'blur(0)';
}

//functions for show adn hide footer elements
const hideFooterElements = function(){
  footerElements.forEach(element => element.classList.add('hidden'))
};
const showFooterElements = function(){
  footerElements.forEach(element => element.classList.remove('hidden'))
};

//functions for show adn hide layers
const hideLayers = function(){
  closeButton.classList.add('hidden');
  cardLayers.forEach(element => element.classList.add('hidden'));
  cardLayers[0].classList.remove('hidden')
};
const showLayers = function(index){
  closeButton.classList.remove('hidden');
  cardLayers.forEach(element => element.classList.add('hidden'));
  cardLayers[index + 1].classList.remove('hidden')
};



//functions for adding events to controls buttons
const setEventLisstener = function () {

  openButtons.forEach((element, index) => {
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      blurBackground();
      showLayers(index);
      hideFooterElements();
    });
  });

  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    unBlurBackground();
    hideLayers();
    showFooterElements();

  });

};

//add events to controls buttons
setEventLisstener()
