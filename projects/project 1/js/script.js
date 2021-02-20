/**
Project 1
Shandon Fleming

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let backgroundColor = {
  h: 284,
  s: 100,
  b: 0
};
let angle = 0;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}


/**
Description of draw()
*/
function draw() {
  background(0, 0, 0);

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 360, 50);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.02;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 460, 50);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.02;


}
