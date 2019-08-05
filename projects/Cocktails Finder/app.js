
// Init UI
const ui = new UI;
const error = new Error;
// Search by ingredient input and button
const searchIngredient = document.querySelector('#searchIngredient');
const btnGetIngredient = document.querySelector('.btnGetIngredient')

// Search by ingredient event listener
btnGetIngredient.addEventListener('click', () => {
  // Get input text
  let inputText = searchIngredient.value.toUpperCase();
  //console.log(inputText);    
  
  if(inputText == '') {
    ui.showAlert('Please fill in ingredient field');
    
  } else{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputText}`, true);

    console.log(xhr);
    
    xhr.onload = function() {
        if(this.responseText.slice(2,8) == 'drinks') {
          console.log(this.responseText.slice(2,8) == 'drinks');
          const response = JSON.parse(this.responseText);
          
          let drinksArray = Array.from(response.drinks);
          console.log(drinksArray);
          ui.showProfile(drinksArray);
          searchIngredient.value = '';

        } else {
          ui.showAlert(`Not found ${inputText} ingredient's name`)
          searchIngredient.value = '';
          console.log(xhr);
        }        
    }
    xhr.send();
  }
})



// Search by name input and button
  const searchName = document.querySelector('#searchName');
  const btnGetName = document.querySelector('.btnGetName');
  // Search input event listener
  btnGetName.addEventListener('click', () => {
    // Get input text
    let inputText = searchName.value.toUpperCase();
    //console.log(inputText);

    if(inputText == '') {
      ui.showAlert('Please fill in the field');
      
    } else{
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`, true);
    
      console.log(xhr);
      xhr.onload = function() {
          
        const response = JSON.parse(this.responseText);
          if(response.drinks === null){
            console.log(this.response.drinks);
            ui.showAlert(`Not found ${inputText} cocktail's name`)
            searchName.value = ''
            console.log(xhr);
          } else {
            console.log(response);
            let drinksArray = Array.from(response.drinks);
            console.log(drinksArray);
            ui.showNameProfile(drinksArray);
            searchName.value = '';
          }        
        }
      xhr.send(); 
    }
})


// Click and show description of cocktail
document.querySelector('#profile').addEventListener('click', showCocktail);

function showCocktail(e) {
  if(e.target.classList.contains('btn-description')) {
    
    let cocktailName = e.target.parentElement.childNodes[1].textContent;
    console.log(cocktailName);
    console.log(e.target.parentElement.childNodes[1].textContent);

    const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`, true);
    
      console.log(xhr);
      xhr.onload = function() {
        const response = JSON.parse(this.responseText);
        let drinksArray = Array.from(response.drinks);
        console.log(drinksArray);
        ui.showNameProfile(drinksArray);
        searchName.value = '';
      }
      xhr.send();
  }
}


   