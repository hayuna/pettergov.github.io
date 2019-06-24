/*
const keyboard = [];
document.onkeypress = function(e){
  keyboard.push(e.charCode);
  console.log(keyboard);
}
*/

const key = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 45];
let keyboard = document.querySelector('.keyboard');
let display = document.querySelector('#display-password');
let img = document.querySelectorAll('.img');
let randFlag = img[Math.floor(Math.random() * img.length)];
let password = randFlag.alt.toUpperCase();
let attempts = 0;
let password1 = '';
let message = document.querySelector('.message');
console.log(password);

function init() { 
  showFlag();
  displayPassword();
  displayKeyboard();

  // Hide password
  for(let i = 0; i < password.length; i++){
    /*
    answerArray[i] = ' - ';
    display.innerHTML = answerArray.join(" ");
    console.log(password.charAt(i));
    */
    password1 = password1  + '+';    
  }
  display.innerHTML = password1;




  
}
init();

// Function Show flag
function showFlag() {
  randFlag.style.display = 'inline-block';
}

// Display password
function displayPassword() {
  display.innerHTML = password1;
}

// Display Keyboard
function displayKeyboard() {
 let out = '';
 for(let i = 0; i < key.length; i++){
  
   out += '<div class="key">' + String.fromCharCode(key[i]) + '</div>';

 }
 keyboard.innerHTML = out;
}

 String.prototype.setWord = function(place, sign)
 {
   if (place > this.length - 1) return this.toString();
   else return this.substr(0, place) + sign + this.substr(place+1);
 }


 // Create Function Check 
 let keyboardKey = document.querySelectorAll('.key');

 keyboardKey.forEach(function (keyValue){
   keyValue.addEventListener('click', check);
   
   
    function check(e) {
    String.fromCharCode(keyValue);
        

      let hit = false; 
      for(let i = 0; i < password.length; i++){

        if(password.charAt(i) == e.target.textContent){
          password1 = password1.setWord(i,e.target.textContent);
          hit = true;
        } 
      }
      
      if(hit === true) {
        e.target.classList.add("correct");
        display.innerHTML = password1;
       
        
          
      } 
      else {
        
        attempts++;
        let imgLife = "img1/s"+ attempts + ".jpg";
        document.querySelector("#life-img").innerHTML = '<img class="life-img" src="'+imgLife+'" alt="" />';
        e.target.classList.add("wrong");

        if(e.target.classList.contains('wrong')) {
          keyValue.removeEventListener('click', check, false); 
        }	
        
      };

      // If Win
      if (password == password1){
        message.innerHTML  = '<p> You Are Right!<br /> The Name Of Country is '+password+' <br /><span class="reset"  onclick="location.reload()">Play Again?</span></p>';
        document.querySelector('#life-img').innerHTML = '<img class="life-img" src="img1/win.jpg" alt="" />';
        
      } else{
        //If Lose
        if (attempts >= 9)
        message.innerHTML  = '<p>You Lose:<br /> The Name Of Country is '+password+' <br /><span class="reset" onclick="location.reload()">Play Again?</span></p>';
       
      }
      
   }
 });