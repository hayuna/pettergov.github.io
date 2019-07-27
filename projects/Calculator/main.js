
let display = document.querySelector('#display');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let backspace = document.querySelector('#backspace');
let percent = document.querySelector('#percent');

let displayResult = [];

// Get numbers
number.forEach(function(num){
  num.addEventListener('click', getNumber);
  function getNumber() {
    displayResult.push(this.value);
    display.innerHTML = displayResult.join(''); 

    console.log(displayResult);
  }
})

// Get operators
operator.forEach(function(oper) {
  oper.addEventListener('click', getOperator);
  function getOperator() {
    if(displayResult[displayResult.length-1] == '-'  
      || displayResult[displayResult.length-1] == '+' 
      || displayResult[displayResult.length-1] == '/' 
      || displayResult[displayResult.length-1] == '*') {
      displayResult.splice(-1, 1, this.value)
      display.innerHTML = displayResult.join('');
    } else {
      displayResult.push(this.value)
      display.innerHTML = displayResult.join('');

      console.log(displayResult);
    }   
  }
})

// Equal Button
equal.addEventListener('click', function (){
  let sum = eval(display.innerHTML);
  displayResult = [];
  let res = sum.toString().split('');
  displayResult = res;
  display.innerHTML = sum;

  console.log(res);
  console.log(sum);  
  console.log(displayResult);
});

// Backspace Button
backspace.addEventListener('click', function(){ 
  displayResult.pop(); 
  display.innerHTML = displayResult.join('');

  if (displayResult.length == 0){
    display.innerHTML = 0;
  }
  console.log(displayResult);
});

// AC Button
clear.addEventListener('click', function(){
  displayResult = [];
  display.innerHTML = "0";

  console.log(displayResult);
});

// Percent Button
percent.addEventListener('click', function() {
  displayResult = [];
  let per = display.innerHTML / 100;
  per = per.toString().split('');
  displayResult = per;
  display.innerHTML = per.join(''); 

  console.log(per);
  
  console.log(displayResult);  
});