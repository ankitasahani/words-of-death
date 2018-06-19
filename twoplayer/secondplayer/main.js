var inputword = ['blue','eyed', 'flutter', 'charge', 'drag', 'cemetery', 'raise', 'expect', 'sordid', 'weight', 'kind', 'versed', 'vivacious', 'gynodioecious', 'salol', 'undutiable', 'nationhood', 'ergometer', 'jeannetta', 'untunneled', 'paleethnologist', 'epigenesist', 'mike', 'hemolysin', 'vespucci', 'dauphin', 'reexamining', 'selves', 'birle', 'capsicum', 'autecologic', 'ornately', 'anticlergy'];
var score = document.querySelector('#mainscore');
var yourscore = 0;
var input = document.querySelector('#wordInput');
var startBtn = document.querySelector('#startgame');
var display = document.querySelector('#words');
var elem = document.querySelector("#progressBar");
var width = 0;
var count;
var count2;
var new1;
var end;
var id;
var game;
var submit;
score.innerHTML = yourscore;
function startGame() {
  display.innerHTML = '';
  score.innerHTML = yourscore;
  width = 0;
  elem.style.left = width + '%';
  count = 4;
  count2 = setInterval(timer, 1000);
  function timer() {
    count = count - 1;
    display.innerHTML = count;
    if (count <= 0) {
      clearInterval(count2);
      Game();
    }
    return;
  }
}
function Game() {
  game = true;
    if (game) {
      new1 = document.querySelector('#newgame');
      end = document.querySelector('#end');
      move();
      display.innerHTML = inputword[0];
      wordsubmition();
      if (new1 === 'clicked') {
          newGame();
      }
      if (end === 'clicked') {
        endGame();
      }
    } else {
      display.innerHTML = 'go?';
      return;
    }
  return; 
}
function newGame() {
  yourscore = 0;
  score.innerHTML = yourscore;
  width = 0;
  elem.style.left = width + '%'
  startGame();
  return yourscore;
}
function endGame() {
  game = false;
  display.innerHTML = 'Over!';
  if (yourscore >= 0) {
   document.body.innerHTML += "<br>Your score is " + yourscore + " points.<br>";
  } else {
    return;
  }
  yourscore = 0;
  submit.value = '';
}
function move() {
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      width = 0;
      endGame();
    } else {
      width++; 
      elem.style.left = width + '%';
      return width;
    }
  }
}
function wordsubmition() {
  submit = input;
  input.addEventListener('keyup', function() {
    event.preventDefault;
    for (i = 0; i <= inputword.length; i++) {
      if (submit.value === inputword[i]) {
        width = 0;
        inputword[i++];
        yourscore += 10;
        score.innerHTML = yourscore; 
        display.innerHTML = inputword[i];
        submit.value = '';
        return yourscore;
      } else {
      }
    }
    return submit;
  })
  return submit;
}
