/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//the Bubble
let bubble = undefined;

//the pin
let pin = undefined;

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  //the Bubble
  bubble1 = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2,
  };

  //the Bubble
  bubble2 = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2,
  };

  //the Bubble
  bubble3 = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2,
  };

  //the pin
  pin = {
    x: mouseX,
    y: mouseY,
    size: 10,
  };
}


/**
Description of draw()
*/
function draw() {
  background(22, 194, 242);

    push();
    //the body of the pin
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    pop();

    let d = dist(mouseX, mouseY, bubble.x, bubble.y);
    if (d < bubble.size/2) {
      bubble.x = random(width);
      bubble.y = height;
    }


    //moves the bubble
    bubble.x += bubble.vx;
    bubble.y += bubble.vy;

    if (bubble.y < 0) {
      bubble.x = random(width);
      bubble.y = height;
    }

    push();
    fill(209, 245, 255);
    noStroke();
    ellipse(bubble.x, bubble.y, bubble.size);
    pop();
}
