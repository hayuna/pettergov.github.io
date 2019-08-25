import { elementsDOM } from './base';

// Get value from ingredient input
export const getInputByIngredient = () => elementsDOM.searchIngredient.value;

// Get value from cocktail's name input
export const getInputByName = () => elementsDOM.searchName.value;

// Clear input after click
export const clearInput = () => {
  elementsDOM.searchIngredient.value = '';
  elementsDOM.searchName.value = '';
};

// Clear results
export const clearResults = () => {
  elementsDOM.searchResultList.innerHTML = '';
  elementsDOM.pages.innerHTML = '';
}

// Display coctails in UI
const renderCocktail = drink => {
  
  const outputCocktailByIngredient = ` 
    <div class="card col-md-9 col-sm-3 col-xs-2 bg-dark m-2 p-0 border border-light-2" style="display: inline-block; width: 100px;">
      <a class="stretched-link text-white" href="#${drink.idDrink}">
        <div class="card-header p-2 text-center" style="height:60px;">${drink.strDrink}</div>
        <div class="card-body p-0">
          <img class="img-fluid" src="${drink.strDrinkThumb}">
        </div>
      </a>
    </div>
  `;
  elementsDOM.searchResultList.insertAdjacentHTML('beforeend', outputCocktailByIngredient);
};

// type: 'left' or 'right'
const createButton = (page, type) => `
  <button type="button" class="btn btn-warning btn-page d-flex align-items-center m-auto results-btn-${type}" data-goto=${type === 'left' ? page - 1 : page + 1}>
    <span>Page ${type === 'left' ? page - 1 : page + 1}</span>
    <i class="material-icons">
      keyboard_arrow_${type === 'left' ? 'left' : 'right'}
    </i>
  </button>
`
const renderButtons = (page, numResults, resPerPage) => {
  const pages = Math.ceil(numResults / resPerPage);

  let button;
  if(page === 1 && pages > 1) {
    // Only button to go to next
    button = createButton(page, 'right');
  } else if (page < pages){
    // Both buttons
    button = `
      ${createButton(page, 'left')}
      ${createButton(page, 'right')}
    `
  } else if (page === pages && pages > 1) {
    // Only button to go to prev page
    button = createButton(page, 'left');
  }
  elementsDOM.pages.insertAdjacentHTML('afterbegin', button)
};


export const renderResults = (drinks, page = 1, resPerPage = 5) => {
  
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;
  
  //console.log(drinks);
  drinks.slice(start, end).forEach(renderCocktail);

  // Display pagination buttons
  renderButtons(page, drinks.length, resPerPage);
};

//*****************************************************//
// Display coctails in UI
const renderCocktailByName = drink => {
  const outputCocktailByName = ` 
  <div class="card text-white bg-dark m-2 border border-light-2">
    <h5 class="card-header cocktailName text-center">${drink.strDrink}</h5>
    <div class="card-body row">
      <div class="col-md-3 col-ms-2 col-xs-2" >
        <img class="img-fluid rounded" style = "max-width: 75%; margin: auto auto 10px auto;" src="${drink.strDrinkThumb}">
      </div>
      <div class="col-md-9">
        <ul class="list-group" style="color: #000;">
          <li class="list-group-item"><b>Category:</b> ${drink.strAlcoholic} / ${drink.strCategory}</li>
          <li class="list-group-item"><b>Glass of cocktail:</b> ${drink.strGlass}</li>
          <li class="list-group-item"><b>Ingredients:</b></li>
          <li class="list-group-item">
            <div class="row" style="display: inline-block">
              <figure style="display: inline-block">
                <img class="img-fluid img-fig mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png">
                <figcaption>${drink.strIngredient1} ${drink.strMeasure1}</figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient2}-Small.png">
                <figcaption>${drink.strIngredient2} ${drink.strMeasure2}</figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient3}-Small.png">
                <figcaption>${drink.strIngredient3} ${drink.strMeasure3}</figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient4}-Small.png">
                <figcaption>${drink.strIngredient4} ${drink.strMeasure4}</figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient5}-Small.png">
                <figcaption>${drink.strIngredient5} ${drink.strMeasure5}</figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient6}-Small.png">
                <figcaption>${drink.strIngredient6} ${drink.strMeasure6}</figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient7}-Small.png">
                <figcaption>${drink.strIngredient7} ${drink.strMeasure7}</figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient8}-Small.png">
                <figcaption>${drink.strIngredient8} ${drink.strMeasure8}</figcaption>
                </figure>
                <figure style="display: inline-block">
                  <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient9}-Small.png">
                  <figcaption>${drink.strIngredient9} ${drink.strMeasure9}</figcaption>
                </figure>
                <figure style="display: inline-block">
                  <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient10}-Small.png">
                  <figcaption>${drink.strIngredient10} ${drink.strMeasure10}</figcaption>
                </figure>
                <figure style="display: inline-block">
                  <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient11}-Small.png">
                  <figcaption>${drink.strIngredient11} ${drink.strMeasure11}</figcaption>
                </figure>
                <figure style="display: inline-block">
                  <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient12}-Small.png">
                  <figcaption>${drink.strIngredient12} ${drink.strMeasure12}</figcaption>
                </figure>
                <figure style="display: inline-block">
                  <img class="img-fluid img-fig mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient13}-Small.png">
                  <figcaption>${drink.strIngredient13} ${drink.strMeasure13}</figcaption>
                </figure>
                <figure style="display: inline-block">
                  <img class="img-fluid img-fig mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient14}-Small.png">
                  <figcaption>${drink.strIngredient14} ${drink.strMeasure14}</figcaption>
                </figure>
                <figure style="display: inline-block">
                  <img class="img-fluid img-fig mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient15}-Small.png">
                  <figcaption>${drink.strIngredient15} ${drink.strMeasure15}</figcaption>
                </figure>
              </div>
            </li>
            <li class="list-group-item text-justify">${drink.strInstructions}</li>
          </ul>            
        </div>
      </div>
  `;
  elementsDOM.searchResultList.insertAdjacentHTML('beforeend', outputCocktailByName);

  let figcaption = document.querySelectorAll('figcaption');
  //console.log(figcaption);
  
  figcaption.forEach( ingredientItem => {
    //console.log(ingredientItem);
    if(ingredientItem.innerText == '' || ingredientItem.innerText == 'null null') {
      ingredientItem.parentElement.style.display = 'none';
    }
  });
}


export const renderCocktailName = (drinks) => {
  //console.log(drinks);
  drinks.forEach(renderCocktailByName);
};