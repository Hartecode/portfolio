'use strict';

const canvas = document.querySelector('#canvas');
const cv = canvas.getContext("2d");
const sw = window.screen.width;
const sh = window.screen.height;
const dim = Math.sqrt((sw*sw)+(sh*sh));
const w = canvas.width = dim;
const h = canvas.height = dim;
const strs = [];
// the number of star on the page. Reducing the amount of stars increases performance
const nstrs = 300;

const rInt = (s,b) => Math.floor(Math.random()*(b-s+1))+s;

class Star {
  constructor(x,y,sz,s,o) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.radius = parseInt(sz);
    this.speed = parseInt(s);
    this.opacity = o;
  }

  draw() {
    cv.beginPath();
    cv.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    cv.closePath();
    cv.fillStyle = "rgba(255,255,255,"+this.opacity+")";
    cv.fill();
  }
}

function draw() {
  cv.clearRect(0,0,w,h);
  for( let i = 0; i < nstrs; i++) {
    strs[i].draw();
    strs[i].x -= strs[i].speed/2;
    if (strs[i].x <= 0) {
      strs[i] = new Star(w,rInt(0,h),rInt(1,6)/3,rInt(1,3),rInt(4,10)/10);
    }
  }
  window.requestAnimationFrame(draw);
}

export function init() {
  window.onload = function() {
    for(let i=0; i<nstrs;i++) {
      strs[i] = new Star(rInt(0,w),rInt(0,h),rInt(1,6)/3,rInt(1,5),rInt(4,10)/10);
    }
    draw();
  }
} 
