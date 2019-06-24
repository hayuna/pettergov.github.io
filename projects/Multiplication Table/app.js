// Dom Elements
let num1 = document.querySelector('#number-one'),
    num2 = document.querySelector('#number-two'),
    itemNumber = document.querySelectorAll('.grid-item'),
    numberInput = document.querySelector('#number-input'),
    check = document.querySelector('#check'),
    result = document.querySelector('#result'),
    timeDisplay = document.querySelector('#time'),
    seconds = document.querySelector('.seconds'),
    scoreDisplay = document.querySelector('#score'),
    message = document.querySelector('#message'),  
    rule = document.querySelector('.rule');


const gameBtn = document.querySelector('#gameBtn'),
      startBtn = document.querySelector('.btnStart'),
      container = document.querySelector('.container'),
      start = document.querySelector('.start');

// Available Level
let levels = {
  easy: 5,
  medium: 4,
  hard: 3
}

let currentLevel = levels.easy,
    time = currentLevel,
    score = 0,
    isPlaying;
seconds.innerHTML = currentLevel;

const numbers = [
1,
2,
3,
4,
5,
6,
7,
8,
9
];

// Initialize game
window.addEventListener('load', function init(){
  rule.innerHTML = 'Check how much you know the multiplication table. Enter Correct Result Within 5 seconds. Game Will Be Over If Your Score Less Then Zero. You Will Lose If Time Is Over. Good Luck!!!'
});

startBtn.addEventListener('click', function() {
  start.style.display = 'none';
  container.style.display = 'block';
  //Load numbers from array
  showNum1(numbers);
  showNum2(numbers);
  // Call countTimeDown every second
  setInterval(countTimeDown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
});

// Generate random array index for number1
let randIndex1 = Math.floor(Math.random() * numbers.length); 
// Generate random array index for number2
let randIndex2 = Math.floor(Math.random() * numbers.length); 

// Pick and show random number1
function showNum1(numbers){
//Output random number1
  num1.innerHTML = numbers[randIndex1];
}
// Pick and show random number2
function showNum2(numbers){
//Output random number2
  num2.innerHTML = numbers[randIndex2];
}
// Multiplication function
function multiplication(num1, num2){
  return num1 * num2; 
}
// Output result of multiplication
result.innerHTML = multiplication(numbers[randIndex1], numbers[randIndex2]);

// To Get New Number Function
function newNumber(){
  num1.innerHTML = numbers[Math.floor(Math.random() * numbers.length)]; 
  num2.innerHTML = numbers[Math.floor(Math.random() * numbers.length)];
  result.innerHTML = num1.innerHTML * num2.innerHTML;
}

// Show numbers in input field
  for(let i = 0; i < itemNumber.length; i++) {
    itemNumber[i].addEventListener('click', function() {
      numberInput.innerHTML += itemNumber[i].value;  
    })
  };

// Function clear input
  clear.addEventListener('click', function(){
    numberInput.innerHTML = "";   
  });

// Function Check Result
  check.addEventListener('click', checkResult);  
  function checkResult() {
    let sum = eval(result.innerHTML);
    if(numberInput.innerHTML == sum){ 
      isPlaying = true;
      time = currentLevel + 1;
      numberInput.innerHTML = "";
      score++;

      setTimeout(function() {
        message.innerHTML = 'Correct!!!';
        message.classList.add('correct');
      }, 0);
      
      setTimeout(function(){
        message.textContent = 'Answer is...'; 
        message.classList.remove('correct');
      }, 700);
      
      newNumber();
    } else{
      isPlaying = false;
      time = currentLevel + 1;
      numberInput.innerHTML = "";
      score--;
      
      setTimeout(function() {
        message.innerHTML = 'Not Correct!!!';
        message.classList.add('wrong');
      }, 0);
      
      setTimeout(function(){ 
        message.textContent = 'Answer is...';
        message.classList.remove('wrong');
      }, 700);

      newNumber();  
    }
    nextLevel();
  // Display score
    scoreDisplay.innerHTML = score; 
};
  
// Create Count down timer function
function countTimeDown(){
  // Check time is not run out
  if(time > 0){
    time--;
  } else if(time === 0){
    // Game is over
    isPlaying = false;
  }
  // Show Time
  timeDisplay.innerHTML = time;
}

// Create Check game status function
function checkStatus(){
  if(!isPlaying && score === -1){
    message.innerHTML = " Your score is under 0. Game Over!!!";
    scoreDisplay.innerHTML = 0;
    timeDisplay.innerHTML = 0;
    disable();
  } else if(!isPlaying && time === 0){
    message.innerHTML = " You lose... Time Over!!!";
    disable();
  }  
}

// Create Function Disabled numbers and show button 'Play Again'

function disable() {
  for(let i = 0; i < itemNumber.length; i++) {
    itemNumber[i].disabled = true;
  };
  message.classList.add('wrong');
  setTimeout(function(){ 
    gameBtn.style.display = 'inline-block';
    gameBtn.classList.add('anime');
  }, 2000);
  
}

// To Start New Game => Reload a Page
gameBtn.addEventListener('click', function newGame(){ 
  window.location.reload();
});

// Change The Level Function
function nextLevel(){
  if(score === 5){
    isPlaying = true;
    alert('Goood job!!! Now Level Medium 4 sec for you');
    currentLevel = levels.medium;
    time = currentLevel + 1;
    scoreDisplay.innerHTML = score+2; 
    seconds.innerHTML = currentLevel;
  } else if(score === 10) {
    isPlaying = true;
    alert('Exelent!!!!! Try Level Hard. 3 sec for you');
    currentLevel = levels.hard;
    time = currentLevel + 1;
    scoreDisplay.innerHTML = score+2; 
    seconds.innerHTML = currentLevel;
  }
};
