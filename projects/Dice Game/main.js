let start = document.querySelector('#btnStart');

start.addEventListener('click', function(){
 
 

  let input1 = document.querySelector('#input1').value;
  let input2 = document.querySelector('#input2').value;
  document.querySelector('#player-0').textContent = input1;
  document.querySelector('#player-1').textContent = input2;

  if( input1 == '' || input2 == '') {
    alert('Please fill the names of players');
   
  } else {
    document.querySelector('.start').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
  }
console.log(input1);
 
})

let scores, roundScore, activePlayer, dice1, dice2, gamePlaying;

init();
 
  // Add Event Listener to Button 'ROLL'
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){
      // Get a rondom number of dice and summarize them
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    diceSum = dice1 + dice2;

    // Get and display pictures of dices
    let diceDom1 = document.querySelector('.dice-one');
    let diceDom2 = document.querySelector('.dice-two'); 

    diceDom1.style.display = 'inline-block';
    diceDom2.style.display = 'inline-block';

    diceDom1.src = 'dice-' + dice1 + '.jpg';
    diceDom2.src = 'dice-' + dice2 + '.jpg';  
    
    // Update the round score IF the rolled number was NOT a 1
    if(dice1 !== 1 && dice2 !== 1) {
      // Add score
      roundScore += diceSum;
      // Display sum of dices 
      document.getElementById('current').textContent = roundScore;
    } else {
      // Next player
      nextPlayer();   

      // Show Alert
      let nameValue = document.querySelector('#player-' + activePlayer).textContent;
      document.querySelector('.alert-text').innerHTML = `You got 1. The turn goes to the ${nameValue}`;
      setTimeout(function() {
        document.querySelector('.alert-text').innerHTML = '';
      },2000);
         
    }

    if(dice1 === 6 && dice2 === 6) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = 0;

      nextPlayer();

      // Show alert
      let nameValue = document.querySelector('#player-' + activePlayer).textContent;
      document.querySelector('.alert-text').innerHTML = `You got 6x6. All your total scores are burned and the turn goes to the ${nameValue}`;
      setTimeout(function() {
        document.querySelector('.alert-text').innerHTML = '';
      },2000);
    }
  } 
})

// Add Event Listener to Button 'HOLD'
document.querySelector('.btn-hold').addEventListener('click', function() {
  if(gamePlaying) {

    // Add current score to TOTAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  
    
    // Check if player won the game
    if(scores[activePlayer] >= 100){
      document.querySelector('#name-' + activePlayer).innerHTML = 'WINNER!!!!';
      document.querySelector('#name-' + activePlayer).classList.add('winner');
      document.querySelector('#name-' + activePlayer).classList.remove('active');
      gamePlaying = false;
    } else {
      nextPlayer();
      //Show Alert
    let nameValue = document.querySelector('#player-' + activePlayer).textContent;
    document.querySelector('.alert-text').innerHTML = `You save your scores. Now turn ${nameValue}`;
      setTimeout(function() {
        document.querySelector('.alert-text').innerHTML = '';
      },2000);
    }
  }
});

// Create FUNCTION 'NEXT PLAYER'
function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  /* 
  if(activePlayer === 0){
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  */
 roundScore = 0;
 current.textContent = '0';
 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');

 document.querySelector('.dice-one').style.display = 'none';

 document.querySelector('.dice-two').style.display = 'none';

 
 
}

// Add Event Listener Button 'NEW'
document.querySelector('.btn-new').addEventListener('click', init);

// Create FUNCTION 'INIT'
function init() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.start').style.display = 'block';
  input1.value = '';
  input2.value = '';

 

  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current').textContent = '0';
  document.getElementById('name-0').innerHTML = '<div class="input" id="player-0">Player-1</div>';
  document.getElementById('name-1').innerHTML = '<div class="input" id="player-1">Player-2</div>';

  document.querySelector('#name-0').classList.remove('winner');
  document.querySelector('#name-1').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
 }

