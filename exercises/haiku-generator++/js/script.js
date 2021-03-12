/**
Haiku-Generator++
Shandon Fleming

This code generated a haiku in which the lines can be changed when they are clicked, and the background color
can be changed when the user pressed any key from 1 to 9. Each color tacitly adds a different tone, mood, and
meaning to the haiku.
*/

"use strict";

//array of five syllable lines
let fiveSyllableLines = [
  'O, what an event',
  'Long before the dawn',
  'What will happen next?',
  'Now it is all up',
  'Where will we go then?'
];

//array of sevene syllable lines
let sevenSyllableLines = [
  'What will be done is foreign',
  'Do not give in to the doubt',
  'All you have ever gone through',
  'Hindsight is twenty twenty',
  'Do not live a basic life'
];

//call a line at random for the three lines
let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

//each line is assigned a specific ID
let line1P = document.getElementById('line-1');
let line2P = document.getElementById('line-2');
let line3P = document.getElementById('line-3');

//each line displays it's own text
line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

//when a line is clicked, it changes
line1P.addEventListener('click', lineClicked);
line2P.addEventListener('click', lineClicked);
line3P.addEventListener('click', lineClicked);

//when a line is clicked it fades
function lineClicked(event) {
  fadeOut(event.target, 1);
}

//if nummber 1 is pressed the background color changes
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 49) {
    document.body.style[`background-color`] = `#ff0000`;
    fadeOut(event.target, 1);
  }
});

//if nummber 2 is pressed the background color changes
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 50) {
    document.body.style[`background-color`] = `#82ed9d`;
    fadeOut(event.target, 1);
  }
});

//if nummber 3 is pressed the background color changes
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 51) {
    document.body.style[`background-color`] = `#fffca6`;
    fadeOut(event.target, 1);
  }
});

//if nummber 4 is pressed the background color changes
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 52) {
    document.body.style[`background-color`] = `#c443de`;
    fadeOut(event.target, 1);
  }
});

//if nummber 5 is pressed the background color changes
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 53) {
    document.body.style[`background-color`] = `#ff005d`;
    fadeOut(event.target, 1);
  }
});

//if nummber 6 is pressed the background color changes
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 54) {
    document.body.style[`background-color`] = `#00ffff`;
    fadeOut(event.target, 1);
  }
});

//if nummber 7 is pressed the background color changes
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 55) {
    document.body.style[`background-color`] = `#3b97e3`;
    fadeOut(event.target, 1);
  }
});

//if nummber 8 is pressed the background color changes
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 56) {
    document.body.style[`background-color`] = `#f7cb63`;
    fadeOut(event.target, 1);
  }
});

//if nummber 9 is pressed the background color changes
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 57) {
    document.body.style[`background-color`] = `#bfacac`;
    fadeOut(event.target, 1);
  }
});

//when clicked, a line will fade out
function fadeOut(element, opacity) {
  opacity -= 0.01;
  element.style['opacity'] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
    fadeOut(element, opacity);
    });
  }
  else {
    //once a line is clicked and fades out, a new line will fade in
    setNewLine(element);
    fadeIn(element, 0);
  }
}

//a new line fades in
function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style['opacity'] = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    });
  }
}

//call a new line at random from the arrays to fade in
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
  return array[index];
}
