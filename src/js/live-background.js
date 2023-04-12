const mainBackground = document.querySelector('.page__background--main');
const secondBackground = document.querySelector('.page__background--second');
let mouseCoordunates = []
let move = [0, 0]


const moveBackground = function (object, offset) {
  move = [move[0] + 1, move[1] + 1]

  object.style.right = mouseCoordunates[0] / offset + 'px';
  object.style.top = mouseCoordunates[1] / offset + 'px';

}

document.addEventListener('mousemove', (evt) => {

  moveBackground(mainBackground, 70);
  moveBackground(secondBackground, 150);
  mouseCoordunates = [evt.pageX, -evt.pageY];
})
