/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//stores the user's webcam
let video = undefined;
//the handpose model
let handpose = undefined;
//the current set of predicitons
let predictions = [];
//the Bubble
let bubbleSet = {
  //an array to store the bubbles
  bubbles: [],
  //number of bubbles
  numBubbles: 3,
  //the color of the bubble
  bubbleColor: {
    r: 209,
    g: 245,
    b: 255
  }
};



/**
Description of setup
*/
function setup() {
  createCanvas(640, 480);

  //accesses the user's webcam
  video = createCapture(VIDEO);
  video.hide();

  //load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function () {
    console.log(`Model loaded.`);
  });

  //listen for predictions
  handpose.on(`predict`, function (results) {
    console.log(results);
    predictions = results;
  });

  // //our Bubble
  // bubble = {
  //   x: random(width),
  //   y: height,
  //   size: 100,
  //   vx: 0,
  //   vy: -2,
  // };

  //create the bubbles by counting up to the number of bubble
  for (let i = 0; i < bubbleSet.numBubbles; i++) {
    //create a new bubble
    let bubble = createBubble();
    //add the bubble to the array of bubble
    bubbleSet.bubbles.push(bubble);
  }
}


/**
Description of draw()
*/
function draw() {
  background(0, 200, 255);

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    push();
    //the body of the pin
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    push();
    //the head of the pin
    noStroke();
    fill(255,0,0)
    ellipse(baseX, baseY, 20);
    pop();

    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size/2) {
      bubble.x = random(width);
      bubble.y = height;
    }
  }

    //moves the bubble
    bubble.x += bubble.vx;
    bubble.y += bubble.vy;

    if (bubble.y < 0) {
      bubble.x = random(width);
      bubble.y = height;
    }

    for (let i = 0; i < bubbleSet.numBubbles; i++) {
    let bubble = bubbleSet.bubbles[i];
    displayBubble(bubble);
}


function createBubble() {
    push();
    fill(209, 245, 255);
    noStroke();
    ellipse(bubble.x, bubble.y, bubble.size);
    pop();
 }

 function displayBubble(bubble) {
     push();
     fill(209, 245, 255);
     noStroke();
     ellipse(bubble.x, bubble.y, bubble.size);
     pop();
  }
