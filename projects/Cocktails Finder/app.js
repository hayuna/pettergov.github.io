
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
    // Make http call
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputText}`)
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);
        
        let drinksArray = Array.from(resp.drinks);
        console.log(drinksArray);
        ui.showProfile(drinksArray);
        searchIngredient.value = '';
    })
    .catch( () => {
      ui.showAlert(`Not found ${inputText} ingredient's name`)
      searchIngredient.value = ''
    })
  }
});

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
      // Make http call
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`)
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);
        
        let drinksArray = Array.from(resp.drinks);
        console.log(drinksArray);
        ui.showNameProfile(drinksArray);
        searchName.value = '';
    })        
      .catch( () => {
        ui.showAlert(`Not found ${inputText} cocktail's name`)
        searchName.value = ''
      })
    }
  })

// Click and show description of cocktail
document.querySelector('#profile').addEventListener('click', showCocktail);

function showCocktail(e) {
  if(e.target.classList.contains('btn-description')) {
    
    let cocktailName = e.target.parentElement.childNodes[1].textContent;
    console.log(cocktailName);
    console.log(e.target.parentElement.childNodes[1].textContent);
   
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);
        
        let drinksArray = Array.from(resp.drinks);
        console.log(drinksArray);
        ui.showNameProfile(drinksArray);
       
    })        
  }
}