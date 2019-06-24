
let display = document.querySelector('#display');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let equal = document.querySelector('#equal');
let clear = document.querySelector('#clear');
let backspace = document.querySelector('#backspace');
let percent = document.querySelector('#percent');

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', function(e){ 
    if(e.target.classList.contains('number')) {
      
      if(display.textContent === '0') {
        display.innerHTML = '';
      }
      display.innerHTML += number[i].value;
    }  
  })
};

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener('click', function(){
    
    
    display.innerHTML += operator[i].value; 
  })
};

equal.addEventListener('click', function getResult(){
  let sum = eval(display.innerHTML);
  display.innerHTML = sum;
  //console.log(typeof(sum));      
});

clear.addEventListener('click', function(){
  display.innerHTML = "0";
});

backspace.addEventListener('click', function(){
  let output = display.innerHTML.toString();		
	output = output.substr(0, output.length-1);
  display.innerHTML = output;
  if (output === ''){
    display.innerHTML ='0';
  }
  //console.log(typeof(output)); ==> string    
});

percent.addEventListener('click', function() {
  let per = display.innerHTML / 100;
  display.innerHTML = per;   
});



 
 
