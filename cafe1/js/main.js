'use strict';

{
  // header
  
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  })

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  })

// mainslide

const images = [
  'img/cafe2.jpg',
  'img/cafe3.jpg',
  'img/cafe4.jpg',
];

let currentIndex = 0;

function slideshow_timer(){
  if (currentIndex === images.length - 1){
    currentIndex = 0;
  } 
  else {
    currentIndex ++;
  }
  document.getElementById("mainslide").src = images[currentIndex];
}

setInterval(slideshow_timer, 3000);

  // window.onload = function(){ 
  //   slideshow_timer()
  // };

}