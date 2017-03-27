$(document).ready(function () {
  "use strict";
  var player, ai,
      isPlayerTurn;
  
  function reset() {
    player = null;
    ai = null;
    isPlayerTurn = null;
    $('.square').text('');
  }
  
  // chooses either 1 or zero to decide who plays first
  function pickRandPlayer() {
    return Math.floor(Math.random() * 2);
  }
  
  function aiMove() {
    
    playerMove();
  }
  
  function playerMove() {
    $('.square').click(function () {
        $(this).text(player);
        aiMove();
    });
  }
  
  function newGame() {
    $('#start').text('Start Over');
    isPlayerTurn = pickRandPlayer();
    console.log(isPlayerTurn + " goes first");
    
    if (isPlayerTurn === 0) {
      playerMove();
    } 
    else {
      aiMove();
    }
    
  }
  
  // starts the game
  $('#play').click(function () {
    newGame();
  });
  
  
  // player picks what token to play with
  $('.btn-lg').click(function () {
    if ($(this).attr('id') === 'X') {
      player = 'X';
    } else {
      player = 'O';
    }
    console.log("you choose: " + player);
  });
  
  $('#start').click(function () {
    if ($('#start').text() === 'Start Over') {
      reset();
    }
  });
    
});