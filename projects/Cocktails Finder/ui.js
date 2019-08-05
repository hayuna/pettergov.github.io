class UI{
  constructor() {
    this.profile = document.querySelector('#profile');
    
  }
  // Display profile in UI
  showProfile(drinksArray) {

    const inputText = searchIngredient.value.toUpperCase();

    let amountCocktails = drinksArray.length; 
    let output = `<p>We found ${amountCocktails} cocktails with ingredient - <b>${inputText}</b></p>`;
    //console.log(inputText);
    drinksArray.forEach(drink => { 

      output += `
      <div class="card col-md-3 col-sm-3 col-xs-2 text-white bg-dark mb-3" style="display: inline-block; width: 120px;">
        <div class="card-header p-2" style="height:60px">${drink.strDrink}</div>
        <div class="card-body p-0">
          <img class="img-fluid mb-2" src="${drink.strDrinkThumb}">
        </div>
        <button type="button" class="btn btn-description btn-outline-secondary btn-block mb-2">
          View
        </button>
      </div>
     
      `
      this.profile.innerHTML = output; 
      
    })
  }
  
// Display cocktail with ingredients
  showNameProfile(drinksArray) {
    
    const inputText = searchName.value.toUpperCase();
    let amountCocktails = drinksArray.length; 
    let outputFull = `<p>We found ${amountCocktails} cocktails with name <b>${inputText}</b></p>`;
  
    drinksArray.forEach( drink => {
  
      outputFull += `
        <div class="card card-body mb-3 text-white bg-dark cocktailName"><h4 class="card-header cocktailName text-center">${drink.strDrink}</h4>
          <div class= "row">
            <div class="col-md-3 col-ms-2">
              <img class="img-fluid mb-2" src="${drink.strDrinkThumb}">
             
            </div>
            <div class="col-md-9">
              <ul class="list-group" style="color: #000;">
                <li class="list-group-item"><b>Category:</b> ${drink.strAlcoholic} / ${drink.strCategory}</li>
                <li class="list-group-item"><b>Glass of cocktail:</b> ${drink.strGlass}</li>
                <li class="list-group-item text-center">
                  <h6 class"text-center">Ingredients:</h6>
                  <div class="row" style="display: inline-block">
                    <figure style="display: inline-block">
                      <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png">
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
                      <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient13}-Small.png">
                      <figcaption>${drink.strIngredient13} ${drink.strMeasure13}</figcaption>
                    </figure>
                    <figure style="display: inline-block">
                      <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient14}-Small.png">
                      <figcaption>${drink.strIngredient14} ${drink.strMeasure14}</figcaption>
                    </figure>
                    <figure style="display: inline-block">
                      <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient15}-Small.png">
                      <figcaption>${drink.strIngredient15} ${drink.strMeasure15}</figcaption>
                    </figure>
                  </div>                 
                <li class="list-group-item text-justify">${drink.strInstructions}</li>
              </ul>
            </div>
          </div>
        </div> 
      `
      this.profile.innerHTML = outputFull;
    })
    
    let figure = document.querySelectorAll('figure');
      figure.forEach( ingredientItem => {
        
        console.log(typeof ingredientItem.childNodes[3].textContent);
        console.log(ingredientItem.childNodes[3].textContent); 

        if(ingredientItem.childNodes[3].textContent == ' ' || ingredientItem.childNodes[3].textContent == '  ' || ingredientItem.childNodes[3].textContent == 'null' || ingredientItem.childNodes[3].textContent == 'null null' || ingredientItem.childNodes[3].textContent == '↵' || ingredientItem.childNodes[3].textContent == ' ↵' || ingredientItem.childNodes[3].textContent == '↵ ' || ingredientItem.childNodes[3].textContent == '↵                      ') {
          ingredientItem.style.display = 'none';
        }
      })       
  }

  // Show Alert
  showAlert = function(message){
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = 'alert alert-dismissible alert-info';
    // Add text 
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    const search = document.querySelector('.search');
    // Insert Alert
    container.insertBefore(div, search);
    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

}
