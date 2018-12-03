const menubars = document.querySelector('#menubars');
const menu = document.querySelector('#menu');
const close = document.querySelector('#close');

menubars.addEventListener('click', toggleMenu);
close.addEventListener('click', removeClass);

function toggleMenu() {
  menu.classList.add('show');
}

function removeClass() {
  menu.classList.remove('show');
}
