'use strict';

// Selectig elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');

// starting conditions
score0El.textContent = 0;
score0El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// rolling dice functionality

btnRoll.addEventListener('click', () => {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // 2. Discplay dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore;
  } else {
    // switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
