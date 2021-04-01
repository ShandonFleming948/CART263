/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/


"use strict";

//the instructions for the game are displayed in an alert
alert("Hello there and welcome to a good old game of I SPY. Click the ok button and then click anywhere on the screen to get started.");

const clues = [
    "I spy something blue",
    "I spy something green",
    "I spy something red",
    ];


let greenballImage;
let redballImage;
let blueballImage;

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
}


/**
Description of draw()
*/
function draw() {
  background(250);

  imageMode(CENTER);
  image(greenballImage,50,100,100,100);
  image(redballImage,450,100,100,100);
  image(blueballImage,850,100,100,100);
}

function mousePressed() {
  currentWord = random(clues);
  responsiveVoice.speak(currentWord);
}
