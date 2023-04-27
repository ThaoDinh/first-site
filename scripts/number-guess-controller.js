'use strict';

const BASE_SCORE = 20;
const BASE_HIGHSCORE = 0;
function getRandomNumber() {
  // Math.truc(Math.random() * 20) + 1;
  return Math.ceil(Math.random() * 20);
}

let score = BASE_SCORE;
let highscore = 0;
let secretNumber = getRandomNumber();
const numberElem = document.querySelector('.number');
const scoreElem = document.querySelector('.score');
const messageElem = document.querySelector('.message');
const guessElem = document.querySelector('.guess');
const bodyElem = document.querySelector('body');
const highscoreElem = document.querySelector('.highscore');

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.ceil(Math.random() * 20);
  scoreElem.textContent = score = BASE_SCORE;
  messageElem.textContent = 'Start guessing...';
  numberElem.textContent = '?';
  guessElem.value = '';

  numberElem.style.width = '15rem';
  bodyElem.style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessElem.value);
  if (!guess) {
    messageElem.textContent = 'No number! 🤷‍♂️';
    return;
  }
  if (guess === secretNumber) {
    messageElem.textContent = 'Correct Number! 🎉';
    bodyElem.style.backgroundColor = '#60b347';
    numberElem.style.width = '30rem';
    numberElem.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreElem.textContent = highscore;
    }
    return;
  }

  if (score === 1) {
    messageElem.textContent = 'You lost the game! 😢';
    scoreElem.textContent = 0;
    return;
  }

  score--;
  scoreElem.textContent = score;
  messageElem.textContent =
    guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
});
