"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

// password: expression

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`,
  agency: `**REDACTED**`,
  assignedLocation: `**REDACTED**`,
};

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;
let governmentData = undefined;
let countryData = undefined;

/**
Description of preload
*/
function preload() {
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  governmentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/governments/us_federal_agencies.json`);
  countryData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries.json`);
}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  if (data !== null) {
    let password = prompt(`Enter Your Password Here:`);
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
      spyProfile.agency = data.agency;
      spyProfile.assignedLocation = data.assignedLocation;
    }
  }
  else {
    generateSpyProfile();
  }
}

function generateSpyProfile() {
  spyProfile.name = prompt(`Agent, enter your name here`);
  let instrument = random(instrumentData.instruments);
  spyProfile.alias = `The ${instrument}`;
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);
  spyProfile.agency = random(governmentData.agencies);
  spyProfile.assignedLocation = random(countryData.countries);

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
  Password: ${spyProfile.password}
  Agency: ${spyProfile.agency}
  Assigned Location: ${spyProfile.assignedLocation}`;

  push();
  textFont(`Courier, monospace`);
  textSize(20);
  textAlign(LEFT, TOP);
  fill(29, 224, 32);
  text(profile, 100, 100);
  pop();
}
