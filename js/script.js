$(document).ready(function () {
  "use strict";

  var X_MARK = 'X',
      O_MARK = 'O',
      player,
      ai;
  
  function setPlayer(char) {
    player = char;
  }
  
  function newGame() {
    
  }
    
  $('.square').click(function () {
      $(this).text('X');
  });
    
});