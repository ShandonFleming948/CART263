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
  ellipse(200, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(350, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(250, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(350, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(200, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(300, 500, 30);
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
  ellipse(450, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 200, 30);
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
  ellipse(550, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(450, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(400, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(450, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  // --------------------

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(700, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(650, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(700, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(650, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(550, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(500, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(600, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(550, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(650, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  // --------------------

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(700, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(850, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(800, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(850, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(700, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(750, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(800, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(750, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(700, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(800, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(750, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  // --------------------

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(900, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(800, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(950, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(900, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(800, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(850, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(800, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(900, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(950, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(850, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(900, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  // --------------------

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1100, 50, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1000, 100, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1100, 150, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1000, 200, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1100, 250, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1000, 300, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1100, 350, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1000, 400, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1100, 450, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1000, 500, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;

  colorMode(HSB);
  fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  ellipse(1100, 550, 30);
  backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  angle += 0.002;




}
