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
}


/**
Description of draw()
*/
function draw() {

}
