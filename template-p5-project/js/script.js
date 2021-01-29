"use strict";

/**
Where’s Sausage Dog? New Game+
Shandon Fleming

-this code displays a variety of animals on the user's screen
-out of the variety of animals, the user must locate the sausage dog before the timer runs out in order to win
*/

//constant for total number of various animals
const NUM_ANIMAL_IMAGES = 10;
//constant for total number of animals on the screen
const NUM_ANIMALS = 100;

//array for the animals and the animal images
let animalImages = [];
let animals = [];

//variables for to manage the sausageDog
let sausageDogImage = undefined;
let sausageDog = undefined;

//variable for the game timer
let timer = undefined;

//variable for the initial background color
let backgroundColor = {
r: 0,
g: 225,
b: 0,
}

//a for loop to load the animal images
function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }
//load the sausageDog image
  sausageDogImage = loadImage(`assets/images/sausage-dog.png`);
}



function setup() {
  //canvas covers the entire screen
  createCanvas(windowWidth,windowHeight);

  //insert the animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }
 //position of the images is set to random
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);

//an alert that instructs the user
instructions();
timer = setTimeout(timeIsUp, 20000);

}


function draw() {
  //displays the background color
  background(backgroundColor.r, backgroundColor.g , backgroundColor.b);

  //displays the animals from the for loop
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }

  sausageDog.update();
}

function mousePressed() {
  sausageDog.mousePressed();

//conditional that alerts the user if they find the sausageDog
  if (sausageDog.found === true) {
    clearTimeout(timer);
    backgroundColor.r = 225;
    alert(`you found it!`);
  }
}


function instructions() {
  //alert that displays the instructions
  alert(`find the sausage dog before the timer runs out!`);
}

function timeIsUp() {
  //alert that lets the user know if they have lost
  alert(`time is up!`);
}
