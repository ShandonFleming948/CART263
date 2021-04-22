/**
Project 2 (I Spy)
Shandon Fleming

The code below displays my second project. It runs a simple I SPY game
in which the computer gives the user a clue and the user interacts with the game by
using the mouse.
*/


"use strict";

//a list of possible I SPY clues
const clues = [
    "I spy some drivers that cannot drive any vehicles",
    "I spy a set of keys",
    "I spy something that can be a solid, a liquid, and a gas",
    "I spy something that can stick to things without glue",
    "I spy something that can affect the weather",
    "I spy the weapon of Poseidon",
    "I spy a hammer",
    "I spy... Pippin",
    "I spy something that can hold things whilst being held",
    "I spy something that everyone can divide, but no one can see where it has been divided",
    "I spy something that is tall when it is young and short when it is old",
    "I spy something that you leave behind more of when you take more of them",
    "I spy something that has a head, a tail, is brown, and has no legs",
    "I spy something that has six faces but does not wear makeup",
    "I spy something that runs around the whole yard without moving",
    "I spy something that doesn’t have lungs but needs air",
    "I spy something that you can catch but never throw",
    "I spy something that you can see everyday but cannot touch",
    "I spy something that you can feel but cannot see",
    "I spy something that is covered in holes but can still hold water",
    "I spy the only vegetable or fruit that is never sold frozen, canned, processed, cooked, or in any other form but fresh",
    "I spy something that speaks without a mouth and hears without ears",
    "I spy something that has eyes but cannot see",
    "I spy something that is more useful when it is broken",
    "I spy something that has one head, one foot, and four legs",
    "I spy a band that can never play music",
    "I spy something that has hands but cannot clap",
    "I spy something that has many teeth but no jaws",
    "I spy something that tastes better than it smells",
    "I spy something that has four wheels and flies",
    "I spy something that begins with e and only contains one letter",
    ];

let currentClue = ``;

let state = `title`; //can be title, simulation, win, lose

//variables for the images
let coldImage;
let alexaImage;
let bedImage;
let bodyofwaterImage;
let candleImage;
let clockImage;
let clownImage;
let tongueImage;
let combImage;
let computerkeysImage;
let diceImage;
let eggImage;
let envelopeImage;
let fenceImage;
let fireImage;
let footstepsImage;
let garbagetruckImage;
let hammerImage;
let lettuceImage;
let magnetImage;
let moonImage;
let mugImage;
let pennyImage;
let pippinImage;
let potatoImage;
let rubberbandImage;
let screwdriversImage;
let skyImage;
let spongeImage;
let tridentImage;
let waterImage;
let windImage;


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
