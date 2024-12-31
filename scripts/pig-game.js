'use strict'

// Selecting elements
const player0Elem = document.querySelector('.player--0')
const player1Elem = document.querySelector('.player--1')
const score0Elem = document.querySelector('#score--0')
const score1Elem = document.getElementById('score--1')
const current0Elem = document.querySelector('#current--0')
const current1Elem = document.getElementById('current--1')
const diceElem = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting conditions
let scores, currentScore, activePlayer, playing
const init = function () {
  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  playing = true

  score0Elem.textContent = 0
  score1Elem.textContent = 0
  current0Elem.textContent = 0
  current1Elem.textContent = 0

  diceElem.classList.add('hidden')
  player0Elem.classList.remove('player--winner')
  player1Elem.classList.remove('player--winner')
  player0Elem.classList.add('player--active')
  player1Elem.classList.remove('player--active')
}
init()

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0Elem.classList.toggle('player--active')
  player1Elem.classList.toggle('player--active')
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.ceil(Math.random() * 6)

    // 2. Display dice
    diceElem.classList.remove('hidden')
    diceElem.src = `/images/pig-game/dice-${dice}.png`

    // 3. Check for rolled 1: if true, switch to the next player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore
    } else {
      // switch to next player
      switchPlayer()
    }
  }
})

// Holding score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player's score
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer]
    // 2. check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // finish the game
      playing = false
      diceElem.classList.add('hidden')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner')
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active')
    }
    // switch to the next player
    else {
      switchPlayer()
    }
  }
})

btnNew.addEventListener('click', init)
