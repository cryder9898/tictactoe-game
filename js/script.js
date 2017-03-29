$(document).ready(function () {
  "use strict";
  var board = [],
      player = '', 
      ai = '';
  
  // chooses either 1 or 0 to decide who plays first
  function getFirstPlay() {
    return Math.floor(Math.random() * 2);
  }
  
  function isWin() {
    
    //checks rows for same letter
    for (var i = 0; i <= 6; i = i + 3) {
      if (board[i] !== '' && board[i] === board[i + 1] && board[i] === board[i + 2]) {
        return true;
      }
    }
    
    //checks cols for same letter
    for (var i = 0; i <= 2; i++) {
      if (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
        return true;
      }
    }
    
    //checks diagonals for same letter
    if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
      return true;
    }
    
    if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
      return true;
    }
    
    return false;
  }
  
  function reset() {
    // make 1 dimensional board of length 9
    board = [];
    for (var i = 0; i < 9; i++) {
      board.push('');
    }
    
    //reset all values
    //player = '';
    //ai = '';
    $('.square').text('');
    $('#win').text('');
  }
  
  // starts the game
  function playGame() {
    $('#start').text('Start Over');    
    if (getFirstPlay() === 0) {
      console.log('player move!');
    } else {
      aiMove();
    }
    
  }
  
  function aiMove() {
    console.log('ai move!');
    
    var empties = [];
    for (var i = 0; i < 9; i++) {
      if (board[i] === '') {
        empties.push(i);
      }
    }
    
    var index = Math.floor(Math.random() * empties.length);
    console.log('empties: ' + empties);
    console.log('empties['+ index + ']: ' + empties[index]);
    console.log(ai);
    setTimeout(function () {
      $('#' + empties[index]).text(ai);
    }, 200);
    
    if (isWin()) {
      $('#win').text('AI Won!');
    }
  }
  
  // players move clicks a square
  $('.square').click(function () {
      if ($(this).text() === '') {
        var id = $(this).attr('id');
        
        // add move to board
        board[id] = 'X';
        console.log(player);
        $(this).text(player);
      }
      console.log(board);
    
      if (isWin()) {
        $('#win').text('You Won!');
      } else {
        aiMove();
      }
    });
  
  $('#start').click(function () {
    reset();
  });
  
  // starts the game
  $('#play').click(function () {
    playGame();
  });  
  
  // Modal open and player picks what token to play with
  $('.btn-lg').click(function () {
    if ($(this).attr('id') === 'X') {
      player = 'X';
      ai = 'O';
    } else {
      player = 'O';
      ai = 'X';
    }
    console.log("you choose: " + player);
  });
    
});