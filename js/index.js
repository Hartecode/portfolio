'use strict';

const bio = document.querySelector('.bio'),
      project = document.querySelector('#project'),
      opennav = document.querySelector('#opennav'),
      bioBox = document.querySelector('#bioBox'),
      projectBox = document.querySelector('#projectBox'),
      header = document.querySelector('.banner'),
      nav = document.querySelector('nav'),
      greeting = document.querySelector('.greeting');

bio.addEventListener('click', () => {
  bioBox.scrollIntoView({behavior: "smooth"});
});

project.addEventListener('click', () => {
  projectBox.scrollIntoView({behavior: "smooth"});
});

opennav.addEventListener('click', () => {
  nav.classList.toggle('fullWidth');
});

function navSlide() {
  const greeting_height = greeting.offsetHeight;
  const scroll_top = window.scrollY;
  
  if (scroll_top) {
    nav.classList.remove('fullWidth');
  }

  if (scroll_top >= greeting_height) { // the detection!
    header.classList.add('is-sticky');
    nav.classList.add('is-nav-stircky');
  } else {
    header.classList.remove('is-sticky');
    nav.classList.remove('is-nav-stircky');
  }
}

document.addEventListener('scroll', navSlide, {passive: true});