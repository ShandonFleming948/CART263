/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

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

  image(greenballImage,0,0,100,100);
  image(redballImage,400,0,100,100);
  image(blueballImage,800,0,100,100);
}
