import Search from './models/Search';
import FullCocktail from './models/FullCocktail';
import * as searchView from './views/searchView';
import * as fullCocktailView from './views/fullCocktailView';
import { elementsDOM } from './views/base';

// Store current data in one central variable
const state = {}

//*****************************************************//
// Control for search cocktail by ingredient
const controlSearchIngredient = async () => {
  // 1) Get ingredient(query) from view
  const ingred = searchView.getInputByIngredient().toLowerCase();
  
  if(ingred) {
    // New search object and add to atate
    state.search = new Search(ingred);
    //console.log(state.search);

    // Clear fields
      searchView.clearInput();
      searchView.clearResults();
      fullCocktailView.clearDisplay();

    // Search cocktails by ingredient
    try {
      await state.search.getIngredient();

      // Display result on UI
      searchView.renderResults(state.search.result);
    } catch (err) {
      alert ('Something wrong with the search...')
    }
  }
}

elementsDOM.btnGetIngredient.addEventListener('click', (e) =>{
  e.preventDefault();
  controlSearchIngredient();
});

elementsDOM.pages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-page');
  //console.log(btn);
  if(btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
    
  }
  
})

//*****************************************************//
// Control for search cocktail by name
const controlSearchName = async () => {
  // 1) Get name(query) from view
  const name = searchView.getInputByName().toUpperCase();
  
  if(name) {
    // New search object and add to state
    state.search = new Search(name);
    //console.log(state.search);

    // Clear fields
      searchView.clearInput();
      searchView.clearResults();
      fullCocktailView.clearDisplay();

    // Search cocktails by name
    try {
      await state.search.getCocktailName();

      // Display result on UI
      searchView.renderCocktailName(state.search.result);
    } catch (err) {
      alert ('Something wrong with the search...')
    }
  }
}

elementsDOM.btnGetName.addEventListener('click', (e) =>{
  e.preventDefault();
  controlSearchName();
})


//*****************************************************//
//FullCocktail controller
const controlFullCocktail = async () =>{
  // Get ID from url
  const id = window.location.hash.replace('#', '');
  //console.log(id);

  if(id) {
    // Create new fullCocktail object
    state.fullCocktail = new FullCocktail(id);

    // Clear cocktail dispaly
    fullCocktailView.clearDisplay();

    try {
      //Get fullCocktail data
      await state.fullCocktail.getFullCocktail();

      // Display fullCocktail
      fullCocktailView.displayFullCocktail(state.fullCocktail);
      //console.log(state.fullCocktail);
    } catch(err) {
      alert('Error, Something wrong with the search...')
    }
  }
  
}
window.addEventListener('hashchange', controlFullCocktail);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlFullCocktail));