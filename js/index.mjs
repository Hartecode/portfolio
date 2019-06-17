'use strict';

import {runImageLazyLoad} from './lazy-load.mjs';
import {init as renderStars} from './star-field.mjs';
import {projectData} from './projectData.mjs';

const bio = document.querySelector('.bio'),
      project = document.querySelector('#project'),
      opennav = document.querySelector('#opennav'),
      bioBox = document.querySelector('#bioBox'),
      projectBox = document.querySelector('#projectBox'),
      header = document.querySelector('.banner'),
      nav = document.querySelector('nav'),
      greeting = document.querySelector('.greeting');

const projectTemplate = ({name, image, github, website, skills, description}) => `
<div class="projectTemp">
          <h3>${name}</h3>
          <img class="projectImg hide" data-lazy="${image.src}" alt="${image.alt}">
          <a href="${github}" aria-label="${name} github" rel=”noopener” target="_blank">
              <input class="btn" type="submit" value="GitHub" />
          </a>
          <a href="${website}" aria-label="${name}" rel=”noopener” target="_blank">
              <input class="btn" type="submit" value="Demo" />
          </a>
         
          <ul class="skillList">
            ${skills.map( s => `<li class="skill">${s}</li>`).join('')}
          </ul>
          <p>${description}</p>
        </div>`;

projectBox.insertAdjacentHTML('beforeend', projectData.map(projectTemplate).join(''));

bio.addEventListener('click', () => {
  bioBox.scrollIntoView({behavior: "smooth"});
},  {passive: true});

project.addEventListener('click', () => {
  projectBox.scrollIntoView({behavior: "smooth"});
},  {passive: true});

opennav.addEventListener('click', () => {
  nav.classList.toggle('fullWidth');
}, {passive: true});

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


runImageLazyLoad();
renderStars();

document.addEventListener('scroll', navSlide, {passive: true});