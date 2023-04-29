"use strict";

"use strict";

const numberElem = document.querySelector(".number");
const scoreElem = document.querySelector(".score");
const messageElem = document.querySelector(".message");
const guessElem = document.querySelector(".guess");
const bodyElem = document.querySelector("body");
const highscoreElem = document.querySelector(".highscore");

function getRandomNumber() {
  // Math.truc(Math.random() * 20) + 1;
  return Math.ceil(Math.random() * 20);
}
let score, highscore, secretNumber;

function init() {
  scoreElem.textContent = score = 20;
  secretNumber = getRandomNumber();
  // visible
  messageElem.textContent = "Start guessing...";
  numberElem.textContent = "?";
  guessElem.value = "";
  numberElem.style.width = "15rem";
  bodyElem.style.backgroundColor = "#222";
}
init();
highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  init();
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessElem.value);
  // Input is not number
  if (!guess) {
    messageElem.textContent = "No number! 🤷‍♂️";
    return;
  }
  // Match guess
  if (guess === secretNumber) {
    messageElem.textContent = "Correct Number! 🎉";
    bodyElem.style.backgroundColor = "#60b347";
    numberElem.style.width = "30rem";
    numberElem.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreElem.textContent = highscore;
    }
    return;
  }
  // Wrong guess
  if (score === 1) {
    messageElem.textContent = "You lost the game! 😢";
    scoreElem.textContent = 0;
    return;
  }

  score--;
  scoreElem.textContent = score;
  messageElem.textContent =
    guess > secretNumber ? "Too high! 📈" : "Too low! 📉";
});
