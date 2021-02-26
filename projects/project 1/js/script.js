/**
Project 1 - Toxicity
Shandon Fleming

The code below runs a simulation in which the user has to use the keyboard controls to guide
a circle through an array of glowing circles to the other side without coming into contact with
too many of them.
*/

"use strict";

//array for the glowing circles
let glowingCircles = []

//variable for the user's circle and its properties
let userCircle = {
  x:50,
  y:300,
  size:37,
  vx:0,
  vy:0,
  speed:4,
  hit: 0,
}

let state = `title`; //can be title, simulation, win, lose

/**
This setup runs annyang when the code is loaded so that the user has to use voice controls to start the game
*/
function setup() {

  if (annyang) {
    let commands = {
      'Go': function() {
        if (state === `title`) {
          state = `simulation`;
        }
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }
  //the canvas covers the entire screen
  createCanvas(windowWidth, windowHeight);

  //all of the individual glowing circles and their individual positions
  glowingCircles.push(new GlowingCircle(200, 50));

  glowingCircles.push(new GlowingCircle(420, 480));

  glowingCircles.push(new GlowingCircle(290, 440));

  glowingCircles.push(new GlowingCircle(300, 300));

  glowingCircles.push(new GlowingCircle(460, 350));

  glowingCircles.push(new GlowingCircle(350, 50));

  glowingCircles.push(new GlowingCircle(550, 50));

  glowingCircles.push(new GlowingCircle(700, 50));

  glowingCircles.push(new GlowingCircle(350, 550));

  glowingCircles.push(new GlowingCircle(550, 550));

  glowingCircles.push(new GlowingCircle(300, 100));

  glowingCircles.push(new GlowingCircle(200, 150));

  glowingCircles.push(new GlowingCircle(300, 200));

  glowingCircles.push(new GlowingCircle(350, 250));

  glowingCircles.push(new GlowingCircle(200, 300));

  glowingCircles.push(new GlowingCircle(250, 350));

  glowingCircles.push(new GlowingCircle(350, 400));

  glowingCircles.push(new GlowingCircle(200, 450));

  glowingCircles.push(new GlowingCircle(300, 500));

  glowingCircles.push(new GlowingCircle(200, 550));

  glowingCircles.push(new GlowingCircle(450, 50));

  glowingCircles.push(new GlowingCircle(500, 100));

  glowingCircles.push(new GlowingCircle(400, 150));

  glowingCircles.push(new GlowingCircle(500, 200));

  glowingCircles.push(new GlowingCircle(400, 250));

  glowingCircles.push(new GlowingCircle(400, 300));

  glowingCircles.push(new GlowingCircle(550, 350));

  glowingCircles.push(new GlowingCircle(450, 400));

  glowingCircles.push(new GlowingCircle(400, 450));

  glowingCircles.push(new GlowingCircle(500, 500));

  glowingCircles.push(new GlowingCircle(450, 550));

  glowingCircles.push(new GlowingCircle(700, 50));

  glowingCircles.push(new GlowingCircle(600, 100));

  glowingCircles.push(new GlowingCircle(650, 150));

  glowingCircles.push(new GlowingCircle(600, 200));

  glowingCircles.push(new GlowingCircle(700, 250));

  glowingCircles.push(new GlowingCircle(650, 300));

  glowingCircles.push(new GlowingCircle(550, 350));

  glowingCircles.push(new GlowingCircle(500, 400));

  glowingCircles.push(new GlowingCircle(600, 450));

  glowingCircles.push(new GlowingCircle(550, 500));

  glowingCircles.push(new GlowingCircle(650, 550));

  glowingCircles.push(new GlowingCircle(700, 50));

  glowingCircles.push(new GlowingCircle(850, 100));

  glowingCircles.push(new GlowingCircle(800, 150));

  glowingCircles.push(new GlowingCircle(850, 200));

  glowingCircles.push(new GlowingCircle(700, 250));

  glowingCircles.push(new GlowingCircle(750, 300));

  glowingCircles.push(new GlowingCircle(800, 350));

  glowingCircles.push(new GlowingCircle(750, 400));

  glowingCircles.push(new GlowingCircle(700, 450));

  glowingCircles.push(new GlowingCircle(800, 500));

  glowingCircles.push(new GlowingCircle(750, 550));

  glowingCircles.push(new GlowingCircle(900, 50));

  glowingCircles.push(new GlowingCircle(800, 100));

  glowingCircles.push(new GlowingCircle(950, 150));

  glowingCircles.push(new GlowingCircle(900, 200));

  glowingCircles.push(new GlowingCircle(800, 250));

  glowingCircles.push(new GlowingCircle(850, 300));

  glowingCircles.push(new GlowingCircle(800, 350));

  glowingCircles.push(new GlowingCircle(900, 400));

  glowingCircles.push(new GlowingCircle(950, 450));

  glowingCircles.push(new GlowingCircle(850, 500));

  glowingCircles.push(new GlowingCircle(900, 550));

  glowingCircles.push(new GlowingCircle(1100, 50));

  glowingCircles.push(new GlowingCircle(1000, 100));

  glowingCircles.push(new GlowingCircle(1100, 150));

  glowingCircles.push(new GlowingCircle(1000, 200));

  glowingCircles.push(new GlowingCircle(1100, 250));

  glowingCircles.push(new GlowingCircle(1000, 300));

  glowingCircles.push(new GlowingCircle(1100, 350));

  glowingCircles.push(new GlowingCircle(1000, 400));

  glowingCircles.push(new GlowingCircle(1100, 450));

  glowingCircles.push(new GlowingCircle(1000, 500));

  glowingCircles.push(new GlowingCircle(1100, 550));

  glowingCircles.push(new GlowingCircle(1050, 330));

  glowingCircles.push(new GlowingCircle(1050, 160));

  glowingCircles.push(new GlowingCircle(1050, 80));

  glowingCircles.push(new GlowingCircle(1050, 470));

  glowingCircles.push(new GlowingCircle(1050, 240));

  glowingCircles.push(new GlowingCircle(1050, 520));

  glowingCircles.push(new GlowingCircle(1050, 400));

  glowingCircles.push(new GlowingCircle(500, 280));

  glowingCircles.push(new GlowingCircle(590, 270));

  glowingCircles.push(new GlowingCircle(640, 380));

  glowingCircles.push(new GlowingCircle(920, 330));

  glowingCircles.push(new GlowingCircle(930, 250));

  glowingCircles.push(new GlowingCircle(830, 430));

  glowingCircles.push(new GlowingCircle(650, 510));

  glowingCircles.push(new GlowingCircle(720, 130));

  glowingCircles.push(new GlowingCircle(730, 200));

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

//run the userCircle's movement
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
display the background color and the four states
*/
function draw() {
  background(0, 0, 0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `win`) {
    win();
  }
  else if (state === `lose`) {
    lose();
  }
}


//display title
function title() {
  push();
  textSize(20);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`Pass through the array of glowing circles and make it to the white square on the other side without touching
        any of them. If you touch one glowing circles, the userCircle will get larger. If you touch two glowing circles, you
        will have to restart. Say "go" to start the game.`,width/2,height/2);
  pop();
}

//run the simulation/the game
function simulation() {
  handleInput();
  move();
  checkOverlap();

  //display all of the glowing circles in the glowingCircles array
  for (let i = 0; i < glowingCircles.length; i++){
     if (glowingCircles[i].active) {
       glowingCircles[i].display();
     }
  }

  //display the userCircle
  ellipse(userCircle.x,userCircle.y,userCircle.size);
  noStroke()
  fill(255);
  ellipse(userCircle.x,userCircle.y,userCircle.size);

  //display the white square at the finish
  fill(255);
  square(1160,280,50);
}

//display "lose" state/page if user touches too many glowingCirlces
function lose() {
  push();
  textSize(34);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`YOU TOUCHED TOO MANY GLOWING CIRCLES :(`,width/2,height/2);
  pop();
}

//display "win" page if user makes it to the white square
function win() {
  push();
  textSize(50);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`CONGRATULATIONS, YOU MADE IT :)`,width/2,height/2);
  pop();
}

/**check if the userCircle has come into contact with too many glowingCircles or if the userCircle made it
to the white square at the finish*/
function checkOverlap() {
  for (let i = 0; i < glowingCircles.length; i++){
    let d = dist(userCircle.x,userCircle.y,glowingCircles[i].x,glowingCircles[i].y);
    if (d < glowingCircles[i].radius/2 + userCircle.size/2 && glowingCircles[i].active) {
        userCircle.size = 44
        glowingCircles[i].active = false
        userCircle.hit = userCircle.hit + 1
    if (userCircle.hit === 2) {
      state = 'lose';
      }
    }
  }
    let d = dist(1185,305,userCircle.x,userCircle.y);
    if (d <  + userCircle.size/2) {
      state = `win`;
    }
}
