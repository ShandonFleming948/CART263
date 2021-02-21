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
  ellipse(100, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(100, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  // --------------------

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  // --------------------

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  // --------------------

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  // --------------------

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  // --------------------

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;




}
