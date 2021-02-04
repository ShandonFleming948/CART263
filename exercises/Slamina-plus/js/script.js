"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
const words = [
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Dodge",
    "Ferrari",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Jaguar",
    "Jeep",
    "Kia",
    "Lamborghini",
    "Land Rover",
    "Lexus",
    "Maserati",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "Mitsubishi",
    "Nissan",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Subaru",
    "Suzuki",
    "Tesla Motors",
    "Toyota",
    "VW",
    "Volvo"
    ];

    let currentWord = ``;
    let currentAnswer = ``;

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

 if (annyang) {
   let commands = {
     'I think it is *word': guessWord
   };
   annyang.addCommands(commands);
   annyang.start();

   textSize(32);
   textStyle(BOLD);
   textAlign(CENTER, CENTER);
 }
}


/**
Description of draw()
*/
function draw() {
  background(0);

  if (currentAnswer === currentWord) {
    fill(0, 255, 0);
  }
  else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width/2, height/2);
}

function mousePressed() {
  currentWord = random(words);
  let reverseWord = reverseString(currentWord);
  responsiveVoice.speak(reverseWord);
}

function guessWord(word) {
  currentAnswer = word.toLowerCase();
}

/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}
