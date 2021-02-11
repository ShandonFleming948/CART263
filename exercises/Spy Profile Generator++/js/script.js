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

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

/**
Description of preload
*/
function preload() {
  instrumentsData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/hexagrams.json`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  if (data !== null) {
    spyProfile.name = data.name;
    spyProfie.alias = data.alias;
    spyProfile.secretWeapon = data.secretWeapon;
    spyProfile.password = data.password;
  }
  else {
    generateSpyProfile();
  }
}

function generateSpyProfile() {
  spyProfile.name = prompt(`Agent, enter your name here`);
  let instrument = random(instrumentData.instruments);
  spyprofile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  localStorage.setItem(`spy-profile-data`,JSON.stringify(spyProfile));
}

/**
Description of draw()
*/
function draw() {
  background(0);

  let profile = `**Classified Spy Profile**

  Name: ${spyProfile.name}
  Alias: ${spyProfile.alias}
  Secret Weapon: ${spyProfile.secretWeapon}
  Password: ${spyProfile.password}`;

  push();
  textFont(`Courier, monospace`);
  textSize(20);
  textAlign(LEFT, TOP);
  fill(29, 224, 32);
  text(profile, 100, 100);
  pop();
}
