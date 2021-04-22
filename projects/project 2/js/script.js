/**
Project 2 Prototype (I Spy)
Shandon Fleming

The code below displays a pototyype for my second project. It runs a simple I SPY game
in which the computer gives the user a clue and the user interacts with the game by
using the mouse
*/


"use strict";

//a list of possible I SPY clues
const clues = [
    "I spy something blue",
    "I spy something green",
    "I spy something red",
    ];

let currentClue = ``;

let state = `title`; //can be title, simulation, win, lose

//variables for the three images
let greenballImage;
let redballImage;
let blueballImage;

//the instructions for the game are displayed in an alert
alert("Once you click the ok button, click anywhere on the screen to get your first clue.");


//loads the images
function preload() {
  greenballImage = loadImage("assets/images/greenball.jpg");
  redballImage = loadImage("assets/images/redball.png");
  blueballImage = loadImage("assets/images/blueball.jpg");
}


//sets up the layout of the page and the positioning of the images
function setup() {
  createCanvas(1250,600);

  greenballImage.x = 50;
  greenballImage.y = 100;
  redballImage.x = 450;
  redballImage.y = 100;
  blueballImage.x = 850;
  blueballImage.y = 100;
}


//draw displays the states and the three images on the canvas
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

//run the game
function simulation() {
}

//pressing the mouse cycles through the states and triggers responsivevoice
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

//checks to see if the user clicked the correct image
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
