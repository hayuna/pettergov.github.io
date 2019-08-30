const ui = new UI();
const searchIngredient = document.querySelector('#searchIngredient');
const btnGetIngredient = document.querySelector('.btnGetIngredient');

btnGetIngredient.addEventListener('click', () => {
  const inputText = searchIngredient.value.toUpperCase();

  if(inputText) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${inputText}`)
      .then(response => {
        if(!response) throw new Error()
        return response
      })
      .then(response => response.json())
      .then(response => {
        if(response.drinks) {
          ui.showProfile(response.drinks);
        }   
      })
      .catch(() => {
        ui.showAlert(`Not found ${inputText} ingredient's name`)
      })
      .finally(() => {
        searchIngredient.value = '';
      });
  } else {
    ui.showAlert('Please fill in ingredient field');  
  }
})

const searchName = document.querySelector('#searchName');
const btnGetName = document.querySelector('.btnGetName');
btnGetName.addEventListener('click', () => {
  const inputText = searchName.value.toUpperCase();
  if(inputText.length) {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`)
      .then(response => response.json())
      .then(response => {
        if(response.drinks){
          ui.showNameProfile(response.drinks);
        }     
      })
      .catch(() => {
        ui.showAlert(`Not found ${inputText} cocktail's name`);
      })
      .finally(() => {
        searchName.value = '';
      })
  } else{
    ui.showAlert('Please fill in the field');
  }
})

document.querySelector('#profile').addEventListener('click', showCocktail);

function showCocktail(e) {
  if(e.target.classList.contains('btn-description')) {
    const cocktailName = e.target.parentElement.childNodes[1].textContent;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
      .then(response => response.json())
      .then(response => {
        ui.showNameProfile(response.drinks);
      })
      .catch(e => {
        ui.showAlert(e);
      })
      .finally(() => {
        searchName.value = '';
      })
  }
}