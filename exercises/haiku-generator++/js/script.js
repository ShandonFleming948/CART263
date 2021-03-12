/**
Haiku-Generator++
Shandon Fleming

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let fiveSyllableLines = [
  'O, what an event',
  'Long before the dawn',
  'What will happen next?',
  'Now it is all up',
  'Where will we go then?'
];

let sevenSyllableLines = [
  'What will be done is foreign',
  'Do not give in to the doubt',
  'All you have ever gone through',
  'Hindsight is twenty twenty',
  'Do not live a basic life'
];


let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

let line1P = document.getElementById('line-1');
let line2P = document.getElementById('line-2');
let line3P = document.getElementById('line-3');

line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

line1P.addEventListener('click', lineClicked);
line2P.addEventListener('click', lineClicked);
line3P.addEventListener('click', lineClicked);


function lineClicked(event) {
  setNewLine(event.target);
}

function fadeOut(element, opacity) {
  opacity -= 0.01;
  element.style['opacity'] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
    fadeOut(element, opacity);
    };
  }
  else {
    //when it is faded out
  }
}

function setNewLine(element) {
  if (element === line1P || element === line3P) {
    element.innerText = random(fiveSyllableLines);
  }
  else if (element === line2P) {
    element.innerText = random(sevenSyllableLines);
  }
}


function random(array){
  let index = Math.floor(Math.random() * array.length);
  return array(index);
}
