/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/


"use strict";

const clues = [
    "I spy something blue",
    "I spy something green",
    "I spy something red",
    ];

let currentClue = ``;

let state = `title`; //can be title, simulation, win, lose

let greenballImage;
let redballImage;
let blueballImage;

//the instructions for the game are displayed in an alert
alert("Once you click the ok button, click anywhere on the screen to get your first clue.");

/**
Description of preload
*/
function preload() {
  greenballImage = loadImage("assets/images/greenball.jpg");
  redballImage = loadImage("assets/images/redball.png");
  blueballImage = loadImage("assets/images/blueball.jpg");
}


/**
Description of setup
*/
function setup() {
  createCanvas(1250,600);

  greenballImage.x = 50;
  greenballImage.y = 100;
  redballImage.x = 450;
  redballImage.y = 100;
  blueballImage.x = 850;
  blueballImage.y = 100;
}


/**
Description of draw()
*/
function draw() {
  background(250);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }

  imageMode(CENTER);
  image(greenballImage,greenballImage.x,greenballImage.y,100,100);
  image(redballImage,redballImage.x,redballImage.y,100,100);
  image(blueballImage,blueballImage.x,blueballImage.y,100,100);
}

//display title
function title() {
  push();
  textSize(20);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`Welcome to a game of I SPY. Click anywhere on the screen to get started`,width/2,height/2);
  pop();
}

function simulation() {
}

function mousePressed() {
  if (state === 'title') {
    state = 'simulation'
    currentClue = random(clues);
    responsiveVoice.speak(currentClue);
  }
  else if (state === 'simulation') {
    clicked();
  }
}

function clicked() {
  let d = dist(blueballImage.x,blueballImage.y,mouseX,mouseY);
  if (currentClue === "I spy something blue" && d < 50) {
    responsiveVoice.speak('that is correct');
  }
   d = dist(redballImage.x,redballImage.y,mouseX,mouseY);
  if (currentClue === "I spy something red" && d < 50) {
    responsiveVoice.speak('you got it');
  }
   d = dist(greenballImage.x,greenballImage.y,mouseX,mouseY);
  if (currentClue === "I spy something green" && d < 50) {
    responsiveVoice.speak('well done');
  }
}
