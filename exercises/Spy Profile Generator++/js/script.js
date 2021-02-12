"use strict";

/**
Spy Profile Generator++
Shandon Fleming

This code displays a simulation in which once the user enters his/her name,
he/she is assigned a personal spy profile.
*/

// password: expression

//if the user enters an incorrect password, all of the information will be REDACTED
let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  password: `**REDACTED**`,
  agency: `**REDACTED**`,
  assignedLocation: `**REDACTED**`,
};

//created variables for the JSON files which will be undefined until they are randomly assigned
let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;
let governmentData = undefined;
let countryData = undefined;

/**
the url's for all of the JSON files
*/
function preload() {
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  governmentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/governments/us_federal_agencies.json`);
  countryData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries.json`);
}


/**
set up the canvas, the profile (if password is correct), and the redacted page (if the password is incorrect)
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

//this function pulls at random from the JSON lists
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
this function manages and displays the color, text, and the layout of the profile
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
