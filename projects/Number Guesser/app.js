// Game values
let min = 1,
    max = 100,
    winningNum = getRandomNum(min, max),
    attempt = document.querySelector('#attempt-input');
    attempt.disabled = true;
    
// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      goBtn = document.querySelector('#go-btn');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Choose a level
function chooseLevel() {
  let selector = document.querySelector('#select-level');
  let value = selector[selector.selectedIndex].value;
  let showGame = document.querySelector('#show-game');
  let start = document.querySelector('#start');
  showGame.style.display = 'block';
  if(value === 'choose'){
    alert('Please Choose A Level');
    showGame.style.display = 'none';

  } else if(value === 'easy'){
    start.style.display = 'none';
    attempt.value = 10;
    attempt.disabled = true;
  } else if(value === 'medium'){
    start.style.display = 'none';
    attempt.value = 7;
    attempt.disabled = true;
  } else if(value === 'hard'){
    start.style.display = 'none';
    attempt.value = 5;
    attempt.disabled = true;
  } else if(value === 'your-choose'){
    start.style.display = 'none';
    attempt.value = '';
    attempt.disabled = false;
  }
}
goBtn.addEventListener('click', chooseLevel);


// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  } 
});
      
// Listen for guess
guessBtn.addEventListener('click', function(){
 
  let guess = parseInt(guessInput.value);
  attempt.disabled = true;
  
  // Validate
  // Check Attempt input
  if (attempt.value == "" || attempt.value < 0 || attempt.value > 99) {
    setMessage(`Please enter a number of attempts until 99`, 'red');
    attempt.disabled = false;
    attempt.style.borderColor = 'red';
    return false;
  }else{
    attempt.style.borderColor = 'black';
  }

  // Check guess-input
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a guess number between ${min} and ${max}`, 'red');
    guess.disabled = false;
    guessInput.style.borderColor = 'red';
    return false;
  }

  // Check if won
  if(guess === winningNum){
    // Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // Wrong number
    attempt.value -= 1;

    if(attempt.value == 0){
      // Game over - lost
      gameOver(false, `Game Over, you lose. The correct number was ${winningNum}`);
      // Game continues - answer wrong
    } else if (guess < winningNum){
      // Change border color
      guessInput.style.borderColor = 'red';
      // Clear Input
      guessInput.value = '';
      // Tell user its the wrong number
      setMessage(`${guess} is not correct. Your are too low!!! ${attempt.value} guesses left`, 'red');
      guessInput.style.borderColor = 'yellow';
    } else if (guess > winningNum) {
      guessInput.value = '';
      setMessage(`${guess} is not correct. Your are too heigh!!! ${attempt.value} guesses left`, 'red');
      guessInput.style.borderColor = 'yellow';
    }
  }
});

// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = '#00ff00' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // PLay Again?
  guessBtn.innerHTML = 'Play Again';
  guessBtn.className += 'play-again';
  guessBtn.style.backgroundColor = '#ff6600';
}

// Get Winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}