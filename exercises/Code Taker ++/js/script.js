/**
Code Taker ++
Shandon Fleming

The code below displays a poem that contains a hidden message. To uncover the
hidden message the user has to pass the mouse over the lines in the poem. Once the user
does so, he/she has to drag the highlighted units and drop them in a text box below to
uncover the message.
*/

"use strict";

//the instructions for the game are displayed in an alert
alert("Scan over the poem to and use the highlighted letters to reveal a secret message.");

$('#solved-dialog').dialog({
  autoOpen: false,
  buttons: {
    "Thank you.": function(){
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
    if ($(this).text() === 'coding is awesome') {
      $('#solved-dialog').dialog('open');
    }
  }
});
