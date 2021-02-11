"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`
};

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

  spyProfile.name = prompt(`Agent, enter your name here`);
}


/**
Description of draw()
*/
function draw() {
  background(0);

  push();
  textFont(`Courier, monospace`);
  textSize(20);
  textAlign(CENTER);
  fill(29, 224, 32);
  text(spyProfile.name, 100, 100);
  pop();
}
