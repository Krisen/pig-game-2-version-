'use strict';

// consts from html
const imgDice = document.querySelector('.dice'); // cube img
const btnRoll = document.querySelector('.btn--roll'); // button that rolls
const btnHold = document.querySelector('.btn--hold'); // button that hold score
const btnNew = document.querySelector('.btn--new'); // button that restarts game / create new game
const players = document.querySelectorAll('.player'); // players array
const scores = document.querySelectorAll('.score'); // scores array
const currentScores = document.querySelectorAll('.current-score'); // currents scores(that was held) array

// others
let currentScore = 0; // start num
let randomDice; // variable for random value

// funcs

const randomizeDice = function () {
  return Math.floor(Math.random() * 6 + 1);
}; // for generate random value from 1 to 6

const switchGame = function () {
  players[0].classList.toggle('player--active');
  players[1].classList.toggle('player--active');
  currentScore = 0;
  scores[0].textContent = 0;
  scores[1].textContent = 0;
}; // for switch players

// funcs for addEventListener

const rollNumberAndChangeImg = function () {
  if (
    currentScores[0].textContent != 100 &&
    currentScores[0].textContent < 100 &&
    currentScores[1].textContent != 100 &&
    currentScores[1].textContent < 100
  ) {
    randomDice = randomizeDice();
    imgDice.src = `dice-${randomDice}.png`;
    currentScore += randomDice;
    for (let i = 0; i < players.length; i++) {
      if (players[i].classList.contains('player--active')) {
        scores[i].textContent = currentScore;
      }
    }

    ///

    if (players[0].classList.contains('player--active') && randomDice === 1) {
      switchGame();
    } else if (
      players[1].classList.contains('player--active') &&
      randomDice === 1
    ) {
      switchGame();
    }
  }
};
/* this func change a cube img equal random num, adds a random num to score,  
and checks not to drop 1, if 1 drops, sides will switch  */

// hold func

const funcHold = function () {
  if (
    currentScores[0].textContent != 100 &&
    currentScores[0].textContent < 100 &&
    currentScores[1].textContent != 100 &&
    currentScores[1].textContent < 100
  ) {
    for (let i = 0; i < currentScores.length; i++) {
      if (players[i].classList.contains('player--active') && randomDice !== 1) {
        let current = currentScores[i].textContent;
        currentScore += Number(current);
        currentScores[i].textContent = currentScore;
        console.log(currentScores[i].textContent);
      }
    }
    switchGame();
  }
};
// it just holds scores

/// restart

const restartFunc = function () {
  imgDice.src = 'dice-1.png';
  for (let i = 0; i < currentScores.length; i++) {
    currentScores[i].textContent = 0;
    scores[i].textContent = 0;
  }
  if (players[1].classList.contains('player--active')) {
    players[0].classList.add('player--active');
    players[1].classList.remove('player--active');
  }
};
// it restarts game

// addEventListener
btnRoll.addEventListener('click', rollNumberAndChangeImg);
btnHold.addEventListener('click', funcHold);
btnNew.addEventListener('click', restartFunc);
