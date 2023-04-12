//select big-picture block
const bigPicture = document.querySelector('#big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const bigPictureDescription = bigPicture.querySelector('.big-picture__description');
//select all thumbnails
const thumbnails = document.querySelectorAll('.gallery__link')
//select control elements
const closePictureButton = bigPicture.querySelector('#big-picture-close')
const prevButton = bigPicture.querySelector('.big-picture__control--prev');
const nextButton = bigPicture.querySelector('.big-picture__control--next');
//get urls for each picture
const urls = new Array(thumbnails.length).fill().map((element, index) => thumbnails[index].href);
const alts = new Array(thumbnails.length).fill().map((element, index) => thumbnails[index].querySelector('img').alt);

let currentPicture = 0;

console.log(urls);
console.log(alts);

//functions to show and hide big picture
const showBigPicture = function () {
  bigPicture.classList.remove('hidden');
}
const hideBigPicture = function () {
  bigPicture.classList.add('hidden');
}

const renderBigPicture = function (index) {
  bigPictureImg.src = urls[index];
  bigPictureImg.alt = alts[index];
  bigPictureDescription.textContent = alts[index];
}

//functions for next/prev buttons
const setPrevButton = function () {
  if (currentPicture === 0) {
    prevButton.classList.add('big-picture__control--disabled')
  } else {
    renderBigPicture(currentPicture - 1);
    currentPicture = currentPicture - 1;
  }
}

const setNextButton = function () {
  if (currentPicture === thumbnails.length - 1) {
    nextButton.classList.add('big-picture__control--disabled')
  } else {
    renderBigPicture(currentPicture + 1);
    currentPicture = currentPicture + 1;
  }
}


//add events
thumbnails.forEach(((element, index) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    showBigPicture();
    renderBigPicture(index);
    currentPicture = index;
    prevButton.addEventListener('click', setPrevButton);
    nextButton.addEventListener('click', setNextButton);
  })
}))

closePictureButton.addEventListener('click', (evt) => {
  hideBigPicture();
  prevButton.removeEventListener('click', setPrevButton);
  nextButton.removeEventListener('click', setNextButton);
})
