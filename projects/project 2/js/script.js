/**
Project 2 (I Spy)
Shandon Fleming

The code below displays my second project. It runs a simple I SPY game
in which the computer gives the user a clue and the user interacts with the game by
using the mouse.
*/


"use strict";

//a list of possible I SPY clues
const clues = [
    "I spy some drivers that cannot drive any vehicles",
    "I spy a set of keys",
    "I spy something that can be a solid, a liquid, and a gas",
    "I spy something that can stick to things without glue",
    "I spy something that can affect the weather",
    "I spy the weapon of Poseidon",
    "I spy a hammer",
    "I spy... Pippin",
    "I spy something that can hold things whilst being held",
    "I spy something that everyone can divide, but no one can see where it has been divided",
    "I spy something that is tall when it is young and short when it is old",
    "I spy something that you leave behind more of when you take more of them",
    "I spy something that has a head, a tail, is brown, and has no legs",
    "I spy something that has six faces but does not wear makeup",
    "I spy something that runs around the whole yard without moving",
    "I spy something that doesn’t have lungs but needs air",
    "I spy something that you can catch but never throw",
    "I spy something that you can see everyday but cannot touch",
    "I spy something that you can feel but cannot see",
    "I spy something that is covered in holes but can still hold water",
    "I spy the only vegetable or fruit that is never sold frozen, canned, processed, cooked, or in any other form but fresh",
    "I spy something that speaks without a mouth and hears without ears",
    "I spy something that has eyes but cannot see",
    "I spy something that is more useful when it is broken",
    "I spy something that has one head, one foot, and four legs",
    "I spy a band that can never play music",
    "I spy something that has hands but cannot clap",
    "I spy something that has many teeth but no jaws",
    "I spy something that tastes better than it smells",
    "I spy something that has four wheels and flies",
    "I spy something that begins with e and only contains one letter",
    ];

let currentClue = ``;

let state = `title`; //can be title, simulation, win, lose

//variables for the images
let coldImage;
let alexaImage;
let bedImage;
let bodyofwaterImage;
let candleImage;
let clockImage;
let clownImage;
let tongueImage;
let combImage;
let computerkeysImage;
let diceImage;
let eggImage;
let envelopeImage;
let fenceImage;
let fireImage;
let footstepsImage;
let garbagetruckImage;
let hammerImage;
let lettuceImage;
let magnetImage;
let moonImage;
let mugImage;
let pennyImage;
let pippinImage;
let potatoImage;
let rubberbandImage;
let screwdriversImage;
let skyImage;
let spongeImage;
let tridentImage;
let waterImage;
let windImage;


//the instructions for the game are displayed in an alert
alert("Once you click the ok button, click anywhere on the screen to get your first clue.");


//loads the images
function preload() {
  coldImage = loadImage("assets/images/a-cold.jpg");
  alexaImage = loadImage("assets/images/alexa.jpg");
  bedImage = loadImage("assets/images/bed.jpg");
  bodyofwaterImage = loadImage("assets/images/body-of-water.jpg");
  candleImage = loadImage("assets/images/candle.jpg");
  clockImage = loadImage("assets/images/Clock.jpg");
  clownImage = loadImage("assets/images/clown.png");
  tongueImage = loadImage("assets/images/tongue.webp");
  combImage = loadImage("assets/images/comb.webp");
  computerkeysImage = loadImage("assets/images/computer-keys.jpg");
  diceImage = loadImage("assets/images/dice.jpg");
  eggImage = loadImage("assets/images/egg.jpg");
  envelopeImage = loadImage("assets/images/envelope.jpg");
  fenceImage = loadImage("assets/images/fence.jpg");
  fireImage = loadImage("assets/images/fire.jpg");
  footstepsImage = loadImage("assets/images/footsteps.jpg");
  garbagetruckImage = loadImage("assets/images/garbage-truck.jpg");
  hammerImage = loadImage("assets/images/hammer.jpg");
  lettuceImage = loadImage("assets/images/lettuce.jpg");
  magnetImage = loadImage("assets/images/magnet.jpg");
  moonImage = loadImage("assets/images/moon.jpg");
  mugImage = loadImage("assets/images/mug.jpg");
  pennyImage = loadImage("assets/images/penny.jpg");
  pippinImage = loadImage("assets/images/Pippin.jpg");
  potatoImage = loadImage("assets/images/potato.jpg");
  rubberbandImage = loadImage("assets/images/rubber-band.jpg");
  screwdriversImage = loadImage("assets/images/screwdrivers.jpg");
  skyImage = loadImage("assets/images/sky.jpg");
  spongeImage = loadImage("assets/images/sponge.png");
  tridentImage = loadImage("assets/images/trident.jpg");
  waterImage = loadImage("assets/images/water.jpg");
  windImage = loadImage("assets/images/water.jpg");
}


//sets up the layout of the page and the positioning of the images
function setup() {
  createCanvas(1250,600);

  coldImage.x = 475;
  coldImage.y = 100;
  alexaImage.x = 525;
  alexaImage.y = 100;
  bedImage.x = 575;
  bedImage.y = 100;
  bodyofwaterImage.x = 625;
  bodyofwaterImage.y = 100;
  candleImage.x = 675;
  candleImage.y = 100;
  clockImage.x = 725;
  clockImage.y = 100;
  clownImage.x = 775;
  clownImage.y = 100;
  tongueImage.x = 825;
  tongueImage.y = 100;

  combImage.x = 475;
  combImage.y = 150;
  computerkeysImage.x = 525;
  computerkeysImage.y = 150;
  diceImage.x = 575;
  diceImage.y = 150;
  eggImage.x = 625;
  eggImage.y = 150;
  envelopeImage.x = 675;
  envelopeImage.y = 150;
  fenceImage.x = 725;
  fenceImage.y = 150;
  fireImage.x = 775;
  fireImage.y = 150;
  footstepsImage.x = 825;
  footstepsImage.y = 150;

  garbagetruckImage.x = 475;
  garbagetruckImage.y = 200;
  hammerImage.x = 525;
  hammerImage.y = 200;
  lettuceImage.x = 575;
  lettuceImage.y = 200;
  magnetImage.x = 625;
  magnetImage.y = 200;
  moonImage.x = 675;
  moonImage.y = 200;
  mugImage.x = 725;
  mugImage.y = 200;
  pippinImage.x = 775;
  pippinImage.y = 200;
  pennyImage.x = 825;
  pennyImage.y = 200;

  potatoImage.x = 475;
  potatoImage.y = 250;
  rubberbandImage.x = 525;
  rubberbandImage.y = 250;
  screwdriversImage.x = 575;
  screwdriversImage.y = 250;
  skyImage.x = 625;
  skyImage.y = 250;
  spongeImage.x = 675;
  spongeImage.y = 250;
  tridentImage.x = 725;
  tridentImage.y = 250;
  waterImage.x = 775;
  waterImage.y = 250;
  windImage.x = 825;
  windImage.y = 250;
}


//draw displays the states and the three images on the canvas
function draw() {
  background(250);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }

  imageMode(CENTER);
  image(coldImage,coldImage.x,coldImage.y,50,50);
  image(alexaImage,alexaImage.x,alexaImage.y,50,50);
  image(bedImage,bedImage.x,bedImage.y,50,50);
  image(bodyofwaterImage,bodyofwaterImage.x,bodyofwaterImage.y,50,50);
  image(candleImage,candleImage.x,candleImage.y,50,50);
  image(clockImage,clockImage.x,clockImage.y,50,50);
  image(clownImage,clownImage.x,clownImage.y,50,50);
  image(tongueImage,tongueImage.x,tongueImage.y,50,50);
  image(combImage,combImage.x,combImage.y,50,50);
  image(computerkeysImage,computerkeysImage.x,computerkeysImage.y,50,50);
  image(diceImage,diceImage.x,diceImage.y,50,50);
  image(eggImage,eggImage.x,eggImage.y,50,50);
  image(envelopeImage,envelopeImage.x,envelopeImage.y,50,50);
  image(fenceImage,fenceImage.x,fenceImage.y,50,50);
  image(fireImage,fireImage.x,fireImage.y,50,50);
  image(footstepsImage,footstepsImage.x,footstepsImage.y,50,50);
  image(garbagetruckImage,garbagetruckImage.x,garbagetruckImage.y,50,50);
  image(hammerImage,hammerImage.x,hammerImage.y,50,50);
  image(lettuceImage,lettuceImage.x,lettuceImage.y,50,50);
  image(magnetImage,magnetImage.x,magnetImage.y,50,50);
  image(moonImage,moonImage.x,moonImage.y,50,50);
  image(mugImage,mugImage.x,mugImage.y,50,50);
  image(pippinImage,pippinImage.x,pippinImage.y,50,50);
  image(pennyImage,pennyImage.x,pennyImage.y,50,50);
  image(potatoImage,potatoImage.x,potatoImage.y,50,50);
  image(rubberbandImage,rubberbandImage.x,rubberbandImage.y,50,50);
  image(screwdriversImage,screwdriversImage.x,screwdriversImage.y,50,50);
  image(skyImage,skyImage.x,skyImage.y,50,50);
  image(spongeImage,spongeImage.x,spongeImage.y,50,50);
  image(tridentImage,tridentImage.x,tridentImage.y,50,50);
  image(waterImage,waterImage.x,waterImage.y,50,50);
  image(windImage,windImage.x,windImage.y,50,50);

}

//display title
function title() {
  push();
  textSize(20);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`Welcome to a game of I SPY. Click anywhere on the screen to get started`,width/2,height/2);
  pop();
}

//run the game
function simulation() {
}

//pressing the mouse cycles through the states and triggers responsivevoice
function mousePressed() {
  if (state === 'title') {
    state = 'simulation'
    currentClue = random(clues);
    responsiveVoice.speak(currentClue);
  }
  else if (state === 'simulation') {
    clicked();
  }
}

//checks to see if the user clicked the correct image
function clicked() {
  let d = dist(screwdriversImage.x,screwdriversImage.y,mouseX,mouseY);
  if (currentClue === "I spy some drivers that cannot drive any vehicles" && d < 50) {
    responsiveVoice.speak('that is correct');
  }
   d = dist(computerkeysImage.x,computerkeysImage.y,mouseX,mouseY);
  if (currentClue === "I spy a set of keys" && d < 50) {
    responsiveVoice.speak('you got it');
  }
   d = dist(waterImage.x,waterImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that can be a solid, a liquid, and a gas" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(magnetImage.x,magnetImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that can stick to things without glue" && d < 50) {
   responsiveVoice.speak('well done');
  }
   d = dist(moonImage.x,moonImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that can affect the weather" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(tridentImage.x,tridentImage.y,mouseX,mouseY);
  if (currentClue === "I spy the weapon of Poseidon" && d < 50) {
   responsiveVoice.speak('well done');
  }
   d = dist(hammerImage.x,hammerImage.y,mouseX,mouseY);
  if (currentClue === "I spy a hammer" && d < 50) {
   responsiveVoice.speak('well done');
  }
   d = dist(pippinImage.x,pippinImage.y,mouseX,mouseY);
  if (currentClue === "I spy... Pippin" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(mugImage.x,mugImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that can hold things whilst being held" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(bodyofwaterImage.x,bodyofwaterImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that everyone can divide, but no one can see where it has been divided" && d < 50) {
    responsiveVoice.speak('you got it');
  }
   d = dist(candleImage.x,candleImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that is tall when it is young and short when it is old" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(footstepsImage.x,footstepsImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that you leave behind more of when you take more of them" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(pennyImage.x,pennyImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has a head, a tail, is brown, and has no legs" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(diceImage.x,diceImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has six faces but does not wear makeup" && d < 50) {
   responsiveVoice.speak('well done');
  }
   d = dist(fenceImage.x,fenceImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that runs around the whole yard without moving" && d < 50) {
   responsiveVoice.speak('well done');
  }
   d = dist(fireImage.x,fireImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that doesn’t have lungs but needs air" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(coldImage.x,coldImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that you can catch but never throw" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(skyImage.x,skyImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that you can see everyday but cannot touch" && d < 50) {
    responsiveVoice.speak('you got it');
  }
   d = dist(windImage.x,windImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that you can feel but cannot see" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(eggImage.x,eggImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that is more useful when it is broken" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(bedImage.x,bedImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has one head, one foot, and four legs" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(rubberbandImage.x,rubberbandImage.y,mouseX,mouseY);
  if (currentClue === "I spy a band that can never play music" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(clockImage.x,clockImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has hands but cannot clap" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(combImage.x,combImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has many teeth but no jaws" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(tongueImage.x,tongueImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that tastes better than it smells" && d < 50) {
    responsiveVoice.speak('well done');
  }
   d = dist(garbagetruckImage.x,garbagetruckImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has four wheels and flies" && d < 50) {
    responsiveVoice.speak('you got it');
  }
   d = dist(envelopeImage.x,envelopeImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that begins with e and only contains one letter" && d < 50) {
    responsiveVoice.speak('well done');
  }

}
