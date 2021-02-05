"use strict";

/**
Slamina-plus
by: Shandon Fleming

This cpde displays a simulation in which the user has to decipher the name of a given vehicle brand. If the user is correct, the answer will appear in green. If the user is wrong, your answer will appear in red.
*/

//array of vehicle names
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

//created variables for the word provided by the simulation and the word provided by the user
    let currentWord = ``;
    let currentAnswer = ``;

//pop up alert to provide the user with instructions for the simulation
    alert(`Decipher the name of the vehicle brand that is given to you. If you are correct, your answer will appear in green. If you are wrong, your answer will appear in red. `);


function setup() {
 //canvas covers the whole screen
 createCanvas(windowWidth, windowHeight);

 //conditional for voice recognition
 if (annyang) {
   let commands = {
     'I think it is *word': guessWord
   };
   annyang.addCommands(commands);
   annyang.start();

 //properties of the text
   textSize(62);
   textStyle(BOLD);
   textAlign(CENTER, CENTER);
 }
}


/**
if the user's answer is correct, the word will be displayed in red/if wrong - green
*/
function draw() {
  background(230, 239, 255);

//correct answer - green
  if (currentAnswer === currentWord) {
    fill(36, 240, 43);
  }
//incorrect answer - red
  else {
    fill(240, 36, 36);
  }
//displays the user's answer in the center of the screen
  text(currentAnswer, width/2, height/2);
}

//if the mouse is pressed, the computer will provide the user with a reversed word
function mousePressed() {
  currentWord = random(words).toLowerCase();
  let reverseWord = reverseString(currentWord);
  responsiveVoice.speak(reverseWord);
}

//checks the user's answer - whether or not itt is uppercase
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
