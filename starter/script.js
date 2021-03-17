'use strict';

//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Kemem Hangat';

//// It's input value
//document.querySelector('.guess').value = 23;
//console.log(document.querySelector('.guess').value);

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const msg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if theres no input
  if (!guess) {
    console.log('NaN');

    //if player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Ya Beutl';
    msg('Ya Betul');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    //if the player loses
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'Too High' : 'Too Low';
      msg(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You Lose';
      msg('You Lose');
      document.querySelector('.score').textContent = 0;
    }
  }

  //if the number less than secretNumber
  //} else if (guess < secretNumber) {
  //if (score > 1) {
  //document.querySelector('.message').textContent = 'Too Low';
  //score--;
  //document.querySelector('.score').textContent = score;
  //} else {
  //document.querySelector('.message').textContent = 'You Lose';
  //document.querySelector('.score').textContent = 0;
  //}
  ////if the number is greater than secretNumber
  //} else if (guess > secretNumber) {
  //if (score > 1) {
  //document.querySelector('.message').textContent = 'Too High';
  //score--;
  //document.querySelector('.score').textContent = score;
  //} else {
  //document.querySelector('.message').textContent = 'You Lose';
  //document.querySelector('.score').textContent = 0;
  //}
  //}
});

document.querySelector('.again').addEventListener('click', function () {
  console.log('tepencet');
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  //document.querySelector('.message').textContent = 'Start Guessing...';
  msg('Start Guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
