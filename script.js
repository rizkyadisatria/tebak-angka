'use strict';

let RandomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscrore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Bukan Angka!');
  } else if (guess !== RandomNumber) {
    displayMessage(
      guess > RandomNumber ? 'Angka terlalu besar!' : 'Angka terlalu kecil!'
    );
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      displayMessage('Kamu gagal!');
      document.querySelector('.check').disabled = true;
    }
  } else {
    displayMessage('Selamat!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('header h1').textContent = 'Correct Number!';
    document.querySelector('.check').disabled = true;
    document.querySelector('.number').textContent = RandomNumber;
    if (score > highscrore) {
      highscrore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  RandomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').disabled = false;
  document.querySelector('.number').textContent = '?';
  document.querySelector('header h1').textContent = 'Guess My Number!';
  document.querySelector('.guess').value = '';
});
