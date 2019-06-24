// Initialize game
window.addEventListener('load', function init(){
  shuffle(img); 
  //Load topImg from array
  showImgTop(img);
 // Call start timer every second
  startTimer();
  game();
});

// DOM Elements
const img = [
  '<img src="images/1.png" alt="">', 
  '<img src="images/2.png" alt="">', 
  '<img src="images/3.png" alt="">', 
  '<img src="images/4.png" alt="">', 
  '<img src="images/5.png" alt="">', 
  '<img src="images/6.png" alt="">' 
  ];

let container = document.querySelector('.container');
let imgTop = document.querySelector('.card-top');
let card = document.querySelectorAll('.card');
let showCase = document.querySelector('.show-case');
let lives = document.querySelector('.lives');
let scores = document.querySelector('.scores');
let currentScore = 0;
let heart = [
  '<i class="fas fa-heart"></i>', 
  '<i class="fas fa-heart"></i>', 
  '<i class="fas fa-heart"></i>'];

let timeDisplay = document.querySelector('.time');
let time = 6; 


// Pick and show random img
  function showImgTop(img){
    // Generate random array index for Top Imag
      let randIndex = Math.floor(Math.random() * img.length);
    //Outpur random img
      imgTop.innerHTML = img[randIndex];
  }

// Shuffle cards array 
function shuffle(img) {
    let ctr = img.length;
    let temp;
    let index;
  
    // While there are elements in the array
      while (ctr > 0) {
    // Pick a random index
      index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
      ctr--;
    // And swap the last element with it
      temp = img[ctr];
      img[ctr] = img[index];
      img[index] = temp;

      for (let i = 0; i < card.length; i++) {
        card[i].innerHTML = img[i]  
      };
    }
    return img;   
}
console.log(shuffle(img));

// To Get New TopImg Function
function newTopImg() {
  imgTop.innerHTML = img[randIndex];
}

function game() {
  for (let i = 0; i < card.length; i++) {
    card[i].innerHTML = img[i]
    card[i].addEventListener('click', function(){
      if(this.innerHTML == imgTop.innerHTML) {
        showImgTop(img);
        shuffle(img);    
        time = 6;
        currentScore ++;
        scores.innerHTML = `scores: ${currentScore}`;
      } else{
        heart.pop();
        lives.innerHTML = `Lives: ${heart.join('')}`;
        showImgTop(img);
        shuffle(img); 
          if(heart.length === 0) {
            gameOver();
           
          }
          //console.log(scores);        
      }
    })
  }
}
    // Create Count down timer function
  function countTimeDown(){
    // Check time is not run out
    if(time > 0){
      time--;
     
    } else if(time === 0){
       
      heart.length--;
      lives.innerHTML = `Lives: ${heart.join('')}`;
      showImgTop(img);
      shuffle(img); 
      console.log(heart.length);
      time = 5;

      if(heart.length == 0) {
        gameOver();
      }
    }
    // Show Time
    timeDisplay.innerHTML = `Your time: ${time} sec` ;
  }

  //Start and Stop Timer
  let t;
  function startTimer() {
    t = setInterval(countTimeDown, 1000); 
  }

  function stopTimer() { 
    clearInterval(t); 
  }  
  
  //Create Game Over Function
  function gameOver() {
    timeDisplay.innerHTML = 'Game Over';
    showCase.classList.add('displayNone')
    // Stop Timer
    stopTimer();

    let btnGameOver = document.querySelector('.btnGameOver');
    btnGameOver.classList.add('showBtn');
    btnGameOver.addEventListener('click', function() {
      window.location.reload();
    })
  }

  
    
    

    

        
    