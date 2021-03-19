/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let barkSFX;

function preload() {
  barkSFX = loadSound('assets/sounds/bark.wav');
}

function mousePressed() {
  barkSFX.play();
}

$('.top-secret').on('click', redact);
setInterval(revelation, 2000);

function redact(event) {
  $(this).removeClass('revealed');
  $(this).addClass('redacted').css("display","none").fadeIn(7000);
}

function revelation() {
  $('.redacted').each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
