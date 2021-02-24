/**
Project 1
Shandon Fleming

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// let backgroundColor = {
//   h: 284,
//   s: 100,
//   b: 0
// };

let glowingCircles = []

let userCircle = {
  x:50,
  y:550,
  size:50,
  vx:0,
  vy:0,
  speed:2
}

class glowingCircle {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.radius = 21;
    this.angle = 0;
    this.backgroundColor =
      {
      h: 284,
      s: 100,
      b: 0
      };
      this.angleSpeed = random(0.2, 0.5)
  }
  display(){
    colorMode(HSB);
    fill(this.backgroundColor.h, this.backgroundColor.s, this.backgroundColor.b);
    ellipse(this.x, this.y, this.radius);
    this.backgroundColor.b = map(sin(this.angle), -1, 1, 20, 100);
    this.angle += this.angleSpeed;
  }
}



/**
Description of preload
*/
// function preload() {
//
// }


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  glowingCircles.push(new glowingCircle(200, 50));

  glowingCircles.push(new glowingCircle(300, 100));
}


//keyboard controls for the white circle
function handleInput() {
  if (keyIsDown(LEFT_ARROW)) {
    userCircle.vx = -userCircle.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    userCircle.vx = userCircle.speed;
  }
  else {
    userCircle.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    userCircle.vy = -userCircle.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    userCircle.vy = userCircle.speed;
  }
  else {
    userCircle.vy = 0;
  }
}

//circles movement
function move() {
  userCircle.x = userCircle.x + userCircle.vx;
  userCircle.y = userCircle.y + userCircle.vy;
}


/**
Description of draw()
*/
function draw() {
  background(0, 0, 0);

  checkOverlap();
  handleInput();
  move();

  for (let i = 0; i < glowingCircles.length; i++){
    glowingCircles[i].display();
  }





  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(200, 150, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(300, 200, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(350, 250, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(200, 300, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(250, 350, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(350, 400, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(200, 450, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(300, 500, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(200, 550, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // // --------------------
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(450, 50, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(500, 100, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(400, 150, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(500, 200, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(400, 250, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(400, 300, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(550, 350, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(450, 400, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(400, 450, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(500, 500, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(450, 550, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // // --------------------
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(700, 50, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(600, 100, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(650, 150, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(600, 200, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(700, 250, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(650, 300, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(550, 350, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(500, 400, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(600, 450, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(550, 500, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(650, 550, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // // --------------------
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(700, 50, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(850, 100, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(800, 150, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(850, 200, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(700, 250, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(750, 300, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(800, 350, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(750, 400, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(700, 450, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(800, 500, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(750, 550, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // // --------------------
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(900, 50, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(800, 100, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(950, 150, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(900, 200, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(800, 250, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(850, 300, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(800, 350, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(900, 400, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(950, 450, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(850, 500, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(900, 550, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // // --------------------
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1100, 50, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1000, 100, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1100, 150, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1000, 200, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1100, 250, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1000, 300, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1100, 350, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1000, 400, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1100, 450, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1000, 500, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;
  //
  // colorMode(HSB);
  // fill(backgroundColor.h, backgroundColor.s, backgroundColor.b);
  // ellipse(1100, 550, 21);
  // backgroundColor.b = map(sin(angle), -1, 1, 20, 100);
  // angle += 0.0002;


  ellipse(userCircle.x,userCircle.y,userCircle.size);
  noStroke()
  fill(255);
  ellipse(userCircle.x,userCircle.y,userCircle.size);
}

function checkOverlap() {
  for (let i = 0; i < glowingCircles.length; i++){
    let d = dist(userCircle.x,userCircle.y,glowingCircles[i].x,glowingCircles[i].y);
    if (d < glowingCircles[i].radius/2 + userCircle.size/2) {
      console.log("hit");
    };
  }
}

// function display() {
//   ellipse(userCircle.x,userCircle.y,userCircle.size);
//   noStroke()
//   fill(255);
//   ellipse(userCircle.x,userCircle.y,userCircle.size);
// }
