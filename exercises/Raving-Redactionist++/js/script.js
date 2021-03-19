/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// once the text is clicked, the revealed text will be hidden
$('.top-secret').on('click', redact);
setInterval(revelation, 2000);

//hides the text
function redact(event) {
  $(this).removeClass('revealed');
  $(this).addClass('redacted').css("display","none").fadeIn(7000);
}

//reveals the text
function revelation() {
  $('.redacted').each(attemptReveal);
}

//pick the text at random to reveal
function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
