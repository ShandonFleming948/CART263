/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

$('.secret').on('mouseover', function(event) {
  $(this).addClass('found', 550);
  $(this).draggable({
    helper: `clone`
  });
});

$(`answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable('disable');
    ui.draggable.removeClass('found');
  }
});
