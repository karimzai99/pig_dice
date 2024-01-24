// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;


  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden')
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();




// rolling dice 
btnRoll.addEventListener('click', function(){

        // Random dice generator
        let dice = Math.floor(Math.random() * 6) + 1;

        const diceEl = document.querySelector('.dice');
        // hide dice // TODO
        diceEl.classList.remove('hidden');


        // generetes random dice pictures. 
        diceEl.src = `images/dice-${dice}.png`
    
        if (dice !== 1) {
            currentScore += dice;

            // add current dice to current score
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            // the player should be switch 
        }
})

// button hold 
    btnHold.addEventListener('click', function(){
        console.log('hello');
    })
// button new game 


// switch player 