/**
Project 1 - Toxicity
Shandon Fleming

This is a template. You must fill in the title,
author, and this description to match your project!

*/

"use strict";

let glowingCircles = []

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
Description of setup
*/
function setup() {

  if (annyang) {
    let commands = {
      'Go': simulation
    };
    annyang.addCommands(commands);
    annyang.start();
  }

  createCanvas(windowWidth, windowHeight);

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

  checkOverlap();
  handleInput();
  move();

  for (let i = 0; i < glowingCircles.length; i++){
     if (glowingCircles[i].active) {
       glowingCircles[i].display();
     }
  }

  ellipse(userCircle.x,userCircle.y,userCircle.size);
  noStroke()
  fill(255);
  ellipse(userCircle.x,userCircle.y,userCircle.size);
}


//display title
function title() {
  push();
  textSize(20);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`Pass through the array of glowing circles and make it to the other side without touching any of them.
        If you touch one glowing circles, the userCircle will get larger. If you touch two glowing circles, you
        will have to restart. Say "go" to start the game.`,width/2,height/2);
  pop();
}

//run simulation
function simulation() {
  handleInput();
  move();
  setup();
  checkOverlap();
}

//display "lose" page if user touches a red circle
function lose() {
  push();
  textSize(34);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`YOU TOUCHED TOO MANY GLOWING CIRCLES :(`,width/2,height/2);
  pop();
}

//display "win" page if user makes it to the green square
function win() {
  push();
  textSize(50);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`CONGRATULATIONS, YOU MADE IT :)`,width/2,height/2);
  pop();
}


function checkOverlap() {
  for (let i = 0; i < glowingCircles.length; i++){
    let d = dist(userCircle.x,userCircle.y,glowingCircles[i].x,glowingCircles[i].y);
    if (d < glowingCircles[i].radius/2 + userCircle.size/2 && glowingCircles[i].active) {
      // console.log("hit");
      userCircle.size = 44
      glowingCircles[i].active = false
      userCircle.hit = userCircle.hit + 1
    if (userCircle.hit === 2) {
      // console.log("game over")
      state = 'lose';
      }
    }
  }
    let d = dist(950,userCircle.x);
    if (d <  + userCircle.size/2) {
      state = `win`;
    }
}

// //leaves title page and starts simulation
// function voiceCommand() {
//   if (annyang) {
//     let commands = {
//       'Go': simulation
//     };
//     annyang.addCommands(commands);
//     annyang.start();
//   }
// }
