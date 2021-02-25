/**
Project 1
Shandon Fleming

This is a template. You must fill in the title,
author, and this description to match your project!

remember to make a readMe
*/

"use strict";

let glowingCircles = []

let userCircle = {
  x:50,
  y:300,
  size:37,
  vx:0,
  vy:0,
  speed:3
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
      this.angleSpeed = random(0.02, 0.05)
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
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  glowingCircles.push(new glowingCircle(200, 50));

  glowingCircles.push(new glowingCircle(300, 300));

  glowingCircles.push(new glowingCircle(460, 350));

  glowingCircles.push(new glowingCircle(350, 50));

  glowingCircles.push(new glowingCircle(550, 50));

  glowingCircles.push(new glowingCircle(700, 50));

  glowingCircles.push(new glowingCircle(350, 550));

  glowingCircles.push(new glowingCircle(550, 550));

  glowingCircles.push(new glowingCircle(300, 100));

  glowingCircles.push(new glowingCircle(200, 150));

  glowingCircles.push(new glowingCircle(300, 200));

  glowingCircles.push(new glowingCircle(350, 250));

  glowingCircles.push(new glowingCircle(200, 300));

  glowingCircles.push(new glowingCircle(250, 350));

  glowingCircles.push(new glowingCircle(350, 400));

  glowingCircles.push(new glowingCircle(200, 450));

  glowingCircles.push(new glowingCircle(300, 500));

  glowingCircles.push(new glowingCircle(200, 550));

  glowingCircles.push(new glowingCircle(450, 50));

  glowingCircles.push(new glowingCircle(500, 100));

  glowingCircles.push(new glowingCircle(400, 150));

  glowingCircles.push(new glowingCircle(500, 200));

  glowingCircles.push(new glowingCircle(400, 250));

  glowingCircles.push(new glowingCircle(400, 300));

  glowingCircles.push(new glowingCircle(550, 350));

  glowingCircles.push(new glowingCircle(450, 400));

  glowingCircles.push(new glowingCircle(400, 450));

  glowingCircles.push(new glowingCircle(500, 500));

  glowingCircles.push(new glowingCircle(450, 550));

  glowingCircles.push(new glowingCircle(700, 50));

  glowingCircles.push(new glowingCircle(600, 100));

  glowingCircles.push(new glowingCircle(650, 150));

  glowingCircles.push(new glowingCircle(600, 200));

  glowingCircles.push(new glowingCircle(700, 250));

  glowingCircles.push(new glowingCircle(650, 300));

  glowingCircles.push(new glowingCircle(550, 350));

  glowingCircles.push(new glowingCircle(500, 400));

  glowingCircles.push(new glowingCircle(600, 450));

  glowingCircles.push(new glowingCircle(550, 500));

  glowingCircles.push(new glowingCircle(650, 550));

  glowingCircles.push(new glowingCircle(700, 50));

  glowingCircles.push(new glowingCircle(850, 100));

  glowingCircles.push(new glowingCircle(800, 150));

  glowingCircles.push(new glowingCircle(850, 200));

  glowingCircles.push(new glowingCircle(700, 250));

  glowingCircles.push(new glowingCircle(750, 300));

  glowingCircles.push(new glowingCircle(800, 350));

  glowingCircles.push(new glowingCircle(750, 400));

  glowingCircles.push(new glowingCircle(700, 450));

  glowingCircles.push(new glowingCircle(800, 500));

  glowingCircles.push(new glowingCircle(750, 550));

  glowingCircles.push(new glowingCircle(900, 50));

  glowingCircles.push(new glowingCircle(800, 100));

  glowingCircles.push(new glowingCircle(950, 150));

  glowingCircles.push(new glowingCircle(900, 200));

  glowingCircles.push(new glowingCircle(800, 250));

  glowingCircles.push(new glowingCircle(850, 300));

  glowingCircles.push(new glowingCircle(800, 350));

  glowingCircles.push(new glowingCircle(900, 400));

  glowingCircles.push(new glowingCircle(950, 450));

  glowingCircles.push(new glowingCircle(850, 500));

  glowingCircles.push(new glowingCircle(900, 550));

  glowingCircles.push(new glowingCircle(1100, 50));

  glowingCircles.push(new glowingCircle(1000, 100));

  glowingCircles.push(new glowingCircle(1100, 150));

  glowingCircles.push(new glowingCircle(1000, 200));

  glowingCircles.push(new glowingCircle(1100, 250));

  glowingCircles.push(new glowingCircle(1000, 300));

  glowingCircles.push(new glowingCircle(1100, 350));

  glowingCircles.push(new glowingCircle(1000, 400));

  glowingCircles.push(new glowingCircle(1100, 450));

  glowingCircles.push(new glowingCircle(1000, 500));

  glowingCircles.push(new glowingCircle(1100, 550));

  glowingCircles.push(new glowingCircle(1050, 330));

  glowingCircles.push(new glowingCircle(1050, 160));

  glowingCircles.push(new glowingCircle(1050, 80));

  glowingCircles.push(new glowingCircle(1050, 470));

  glowingCircles.push(new glowingCircle(1050, 240));

  glowingCircles.push(new glowingCircle(1050, 520));

  glowingCircles.push(new glowingCircle(1050, 400));

  glowingCircles.push(new glowingCircle(500, 280));

  glowingCircles.push(new glowingCircle(590, 270));

  glowingCircles.push(new glowingCircle(640, 380));

  glowingCircles.push(new glowingCircle(920, 330));

  glowingCircles.push(new glowingCircle(930, 250));

  glowingCircles.push(new glowingCircle(830, 430));

  glowingCircles.push(new glowingCircle(650, 510));

  glowingCircles.push(new glowingCircle(720, 130));

  glowingCircles.push(new glowingCircle(730, 200));

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

  userCircle.x = constrain(userCircle.x,50,1250);
  userCircle.y = constrain(userCircle.y,50,550);
    if (userCircle.x > 949) {
      userCircle.y = constrain(userCircle.y,50,550);
    }
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

  ellipse(userCircle.x,userCircle.y,userCircle.size);
  noStroke()
  fill(255);
  ellipse(userCircle.x,userCircle.y,userCircle.size);
}

function checkOverlap() {
  for (let i = 0; i < glowingCircles.length; i++){
    let d = dist(userCircle.x,userCircle.y,glowingCircles[i].x,glowingCircles[i].y);
    if (d < glowingCircles[i].radius/2 + userCircle.size/2) {
      // console.log("hit");
      userCircle.size = 42
    }
  }
}
