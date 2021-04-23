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

let score = 0;

let timer = undefined;

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
  windImage = loadImage("assets/images/wind.jpg");
}


//sets up the layout of the page and the positioning of the images
function setup() {
  createCanvas(1250,515);

  coldImage.x = 100;
  coldImage.y = 80;
  alexaImage.x = 275;
  alexaImage.y = 100;
  bedImage.x = 450;
  bedImage.y = 80;
  bodyofwaterImage.x = 625;
  bodyofwaterImage.y = 100;
  candleImage.x = 750;
  candleImage.y = 80;
  clockImage.x = 925;
  clockImage.y = 100;
  clownImage.x = 1100;
  clownImage.y = 80;

  tongueImage.x = 100;
  tongueImage.y = 180;
  combImage.x = 275;
  combImage.y = 210;
  computerkeysImage.x = 450;
  computerkeysImage.y = 180;
  diceImage.x = 625;
  diceImage.y = 210;
  eggImage.x = 750;
  eggImage.y = 180;
  envelopeImage.x = 925;
  envelopeImage.y = 210;
  fenceImage.x = 1100;
  fenceImage.y = 180;

  fireImage.x = 100;
  fireImage.y = 280;
  footstepsImage.x = 275;
  footstepsImage.y = 340;
  garbagetruckImage.x = 450;
  garbagetruckImage.y = 280;
  hammerImage.x = 625;
  hammerImage.y = 340;
  lettuceImage.x = 750;
  lettuceImage.y = 280;
  magnetImage.x = 925;
  magnetImage.y = 340;
  moonImage.x = 1100;
  moonImage.y = 280;

  mugImage.x = 100;
  mugImage.y = 380;
  pippinImage.x = 275;
  pippinImage.y = 450;
  pennyImage.x = 450;
  pennyImage.y = 380;
  potatoImage.x = 625;
  potatoImage.y = 450;
  rubberbandImage.x = 750;
  rubberbandImage.y = 380;
  screwdriversImage.x = 925;
  screwdriversImage.y = 450;
  skyImage.x = 1100;
  skyImage.y = 380;

  spongeImage.x = 100;
  spongeImage.y = 480;
  tridentImage.x = 450;
  tridentImage.y = 480;
  waterImage.x = 750;
  waterImage.y = 480;
  windImage.x = 1100;
  windImage.y = 480;
}


//draw displays the states and the three images on the canvas
function draw() {
  background(0, 100, 158);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }

  imageMode(CENTER);
  image(coldImage,coldImage.x,coldImage.y,85,50);
  image(alexaImage,alexaImage.x,alexaImage.y,65,50);
  image(bedImage,bedImage.x,bedImage.y,50,50);
  image(bodyofwaterImage,bodyofwaterImage.x,bodyofwaterImage.y,50,50);
  image(candleImage,candleImage.x,candleImage.y,50,50);
  image(clockImage,clockImage.x,clockImage.y,50,50);
  image(clownImage,clownImage.x,clownImage.y,50,50);
  image(tongueImage,tongueImage.x,tongueImage.y,60,50);
  image(combImage,combImage.x,combImage.y,60,60);
  image(computerkeysImage,computerkeysImage.x,computerkeysImage.y,50,50);
  image(diceImage,diceImage.x,diceImage.y,70,50);
  image(eggImage,eggImage.x,eggImage.y,50,50);
  image(envelopeImage,envelopeImage.x,envelopeImage.y,50,50);
  image(fenceImage,fenceImage.x,fenceImage.y,50,50);
  image(fireImage,fireImage.x,fireImage.y,60,50);
  image(footstepsImage,footstepsImage.x,footstepsImage.y,60,50);
  image(garbagetruckImage,garbagetruckImage.x,garbagetruckImage.y,50,50);
  image(hammerImage,hammerImage.x,hammerImage.y,50,50);
  image(lettuceImage,lettuceImage.x,lettuceImage.y,50,50);
  image(magnetImage,magnetImage.x,magnetImage.y,50,50);
  image(moonImage,moonImage.x,moonImage.y,50,50);
  image(mugImage,mugImage.x,mugImage.y,50,50);
  image(pippinImage,pippinImage.x,pippinImage.y,100,50);
  image(pennyImage,pennyImage.x,pennyImage.y,50,50);
  image(potatoImage,potatoImage.x,potatoImage.y,50,50);
  image(rubberbandImage,rubberbandImage.x,rubberbandImage.y,50,50);
  image(screwdriversImage,screwdriversImage.x,screwdriversImage.y,50,50);
  image(skyImage,skyImage.x,skyImage.y,50,50);
  image(spongeImage,spongeImage.x,spongeImage.y,50,50);
  image(tridentImage,tridentImage.x,tridentImage.y,60,60);
  image(waterImage,waterImage.x,waterImage.y,50,50);
  image(windImage,windImage.x,windImage.y,50,50);

}

//display title
function title() {
  push();
  textSize(20);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`Welcome to a game of I SPY. Click anywhere on the screen to get started`,width/2,30);
  pop();
}

//run the game
function simulation() {
  push();
  textSize(20);
  fill(3, 223, 252);
  textAlign(CENTER,CENTER);
  text(`Score: ${score}`,525,30);
  text(`Timer: ${ceil(timer / 60)}`,725,30);
  pop();
  timer = timer - 1;
  if (timer === 0) {
    state = 'game over'
  }
}

//pressing the mouse cycles through the states and triggers responsivevoice
function mousePressed() {
  if (state === 'title') {
    state = 'simulation'
    newRound()
  }
  else if (state === 'simulation') {
    clicked();
  }
}

function newRound() {
  currentClue = random(clues);
  responsiveVoice.speak(currentClue);
  timer = 15 * 60;
}

//checks to see if the user clicked the correct image
function clicked() {
  let d = dist(screwdriversImage.x,screwdriversImage.y,mouseX,mouseY);
  if (currentClue === "I spy some drivers that cannot drive any vehicles" && d < 50) {
    responsiveVoice.speak('Nice job...that is correct');
     score = score + 1;
     newRound()
  }
   d = dist(computerkeysImage.x,computerkeysImage.y,mouseX,mouseY);
  if (currentClue === "I spy a set of keys" && d < 50) {
    responsiveVoice.speak('you got it');
     score = score + 1;
     newRound()
  }
   d = dist(waterImage.x,waterImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that can be a solid, a liquid, and a gas" && d < 50) {
    responsiveVoice.speak('Exactly...water');
     score = score + 1;
     newRound()
  }
   d = dist(magnetImage.x,magnetImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that can stick to things without glue" && d < 50) {
   responsiveVoice.speak('The magnet...exactly');
    score = score + 1;
    newRound()
  }
   d = dist(moonImage.x,moonImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that can affect the weather" && d < 50) {
    responsiveVoice.speak('Oh yeah...if you read the book...life as we knew it...you would know this one off the top of your head');
     score = score + 1;
     newRound()
  }
   d = dist(tridentImage.x,tridentImage.y,mouseX,mouseY);
  if (currentClue === "I spy the weapon of Poseidon" && d < 50) {
   responsiveVoice.speak('Ha...well done');
    score = score + 1;
    newRound()
  }
   d = dist(hammerImage.x,hammerImage.y,mouseX,mouseY);
  if (currentClue === "I spy a hammer" && d < 50) {
   responsiveVoice.speak('well done...that was a tricky one');
    score = score + 1;
    newRound()
  }
   d = dist(pippinImage.x,pippinImage.y,mouseX,mouseY);
  if (currentClue === "I spy... Pippin" && d < 50) {
    responsiveVoice.speak('Ha...that is him...alright');
     score = score + 1;
     newRound()
  }
   d = dist(mugImage.x,mugImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that can hold things whilst being held" && d < 50) {
    responsiveVoice.speak('There you go...that was a fairly easy one');
     score = score + 1;
     newRound()
  }
   d = dist(bodyofwaterImage.x,bodyofwaterImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that everyone can divide, but no one can see where it has been divided" && d < 50) {
    responsiveVoice.speak('Nice job most people get stuck on that one');
     score = score + 1;
     newRound()
  }
   d = dist(candleImage.x,candleImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that is tall when it is young and short when it is old" && d < 50) {
    responsiveVoice.speak('Hey...you are pretty good at this');
     score = score + 1;
     newRound()
  }
   d = dist(footstepsImage.x,footstepsImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that you leave behind more of when you take more of them" && d < 50) {
    responsiveVoice.speak('Wow...I did not think you would have gotten that one');
     score = score + 1;
     newRound()
  }
   d = dist(pennyImage.x,pennyImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has a head, a tail, is brown, and has no legs" && d < 50) {
    responsiveVoice.speak('Good...thinking');
     score = score + 1;
     newRound()
  }
   d = dist(diceImage.x,diceImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has six faces but does not wear makeup" && d < 50) {
   responsiveVoice.speak('well done');
    score = score + 1;
    newRound()
  }
   d = dist(fenceImage.x,fenceImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that runs around the whole yard without moving" && d < 50) {
   responsiveVoice.speak('Nice job...tht one is a classic');
    score = score + 1;
    newRound()
  }
   d = dist(fireImage.x,fireImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that doesn’t have lungs but needs air" && d < 50) {
    responsiveVoice.speak('That is correct. Fires do need air. Just dont make the mistake of trying to give a dying flame C P R. Ha Ha Ha');
     score = score + 1;
     newRound()
  }
   d = dist(coldImage.x,coldImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that you can catch but never throw" && d < 50) {
    responsiveVoice.speak('Clever thinking');
     score = score + 1;
     newRound()
  }
   d = dist(skyImage.x,skyImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that you can see everyday but cannot touch" && d < 50) {
    responsiveVoice.speak('Exactly...that kind of takes away from the saying...reach for the sky...because you can reach all you want...but you will never touch it...ha ha ha');
     score = score + 1;
     newRound()
  }
   d = dist(windImage.x,windImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that you can feel but cannot see" && d < 50) {
    responsiveVoice.speak('Yes...the wind');
     score = score + 1;
     newRound()
  }
   d = dist(spongeImage.x,spongeImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that is covered in holes but can still hold water" && d < 50) {
    responsiveVoice.speak('Nice thinking...a sponge');
     score = score + 1;
     newRound()
  }
   d = dist(lettuceImage.x,lettuceImage.y,mouseX,mouseY);
  if (currentClue === "I spy the only vegetable or fruit that is never sold frozen, canned, processed, cooked, or in any other form but fresh" && d < 50) {
    responsiveVoice.speak('Nice job. Most people click the potatoes on that one. HA');
     score = score + 1;
     newRound()
  }
   d = dist(alexaImage.x,alexaImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that speaks without a mouth and hears without ears" && d < 50) {
    responsiveVoice.speak('Thats right. Did you know that Alexa is my cousin...yeah...she would come over to my familys server every weekend and eat all of our megabytes...and then she would not even clean up after herself...can you believe that...the audacity of that young lady...unbelievable...unbelieveable...anyway...I digress');
     score = score + 1;
     newRound()
  }
   d = dist(potatoImage.x,potatoImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has eyes but cannot see" && d < 50) {
    responsiveVoice.speak('Nice job... A little kid earlier on today clicked the dice for that one... I wanted to laugh... so badly');
     score = score + 1;
     newRound()
  }
   d = dist(eggImage.x,eggImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that is more useful when it is broken" && d < 50) {
    responsiveVoice.speak('well done...eggs');
     score = score + 1;
     newRound()
  }
   d = dist(bedImage.x,bedImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has one head, one foot, and four legs" && d < 50) {
    responsiveVoice.speak('Nice job..I was hoping that you would get stuck on that one');
     score = score + 1;
     newRound()
  }
   d = dist(rubberbandImage.x,rubberbandImage.y,mouseX,mouseY);
  if (currentClue === "I spy a band that can never play music" && d < 50) {
    responsiveVoice.speak('well done...that was a fairly simple one');
     score = score + 1;
     newRound()
  }
   d = dist(clockImage.x,clockImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has hands but cannot clap" && d < 50) {
    responsiveVoice.speak('Exactly... a clock... now how about you look at the time on the nearest clock to you for about...fifteen seconds');
     score = score + 1;
     newRound()
  }
   d = dist(combImage.x,combImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has many teeth but no jaws" && d < 50) {
    responsiveVoice.speak('Yes an comb');
     score = score + 1;
     newRound()
  }
   d = dist(tongueImage.x,tongueImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that tastes better than it smells" && d < 50) {
    responsiveVoice.speak('well done...way too many people overthink that one and click the eggs');
     score = score + 1;
     newRound()
  }
   d = dist(garbagetruckImage.x,garbagetruckImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that has four wheels and flies" && d < 50) {
    responsiveVoice.speak('Right...the garbage truck');
     score = score + 1;
     newRound()
  }
   d = dist(envelopeImage.x,envelopeImage.y,mouseX,mouseY);
  if (currentClue === "I spy something that begins with e and only contains one letter" && d < 50) {
    responsiveVoice.speak('There you go...an envelope');
     score = score + 1;
     newRound()
  }

}
