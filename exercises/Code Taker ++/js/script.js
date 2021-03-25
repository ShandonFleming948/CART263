/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

alert("Scan over the poem to and use the highlighted letters to reveal a secret message.");


$('#solved-dialog').dialog({
  autoOpen: false,
  buttons: {
    "I know.": function(){
      $(this).dialog('close');
    }
  }
});

$('.secret').on('mouseover', function(event) {
  $(this).addClass('found', 550);
  $(this).draggable({
    helper: `clone`
  });
});

$(`#answer`).droppable({
  drop: function(event, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable('disable');
    ui.draggable.removeClass('found');
    //check if the user got the correct answer
    if ($(this).text() === 'Theremin') {
      $('#solved-dialog').dialog('open');
    }
  }
});
