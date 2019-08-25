import { elementsDOM } from './base';

// Clear cocktails dispaly 
export const clearDisplay = () => {
  elementsDOM.cardDispaly.innerHTML = '';
}

export const displayFullCocktail = drink => {
  //console.log(drink);
  const outputFullCocktail = `
  
  <div class="card text-white bg-dark m-2 border border-light-2">
  <h5 class="card-header cocktailName text-center">${drink.title}</h5>
  <div class="card-body row">
    <div class="col-md-3 col-ms-1 col-xs-1" >
      <img class="img-fluid rounded" style = "margin: auto auto 10px auto;" src="${drink.img}">
      <div ><b>Category:</b> ${drink.type} / ${drink.category}</div>
      <div><b>Glass:</b> ${drink.glass}</div>
    </div>
    <div class="col-md-9 col-ms-11 col-xs-11">
      <ul class="list-group" style="color: #000;">
        <li class="list-group-item"><b>Ingredients:</b></li>
        <li class="list-group-item">
          <div class="row" style="display: inline-block">
            <figure class="col-ms-2" style="display: inline-block">
              <img class="img-fluid img-fig mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[0]}-Small.png">
              <figcaption><span class="ingr">${drink.ingredients[0]}</span> <span class="meas">${drink.measures[0]}</span></figcaption>
            </figure>
            <figure class="col-ms-2" style="display: inline-block">
              <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[1]}-Small.png">
              <figcaption><span class="ingr">${drink.ingredients[1]}</span> <span class="meas">${drink.measures[1]}</span></figcaption>
            </figure>
            <figure style="display: inline-block">
              <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[2]}-Small.png">
              <figcaption><span class="ingr">${drink.ingredients[2]}</span> <span class="meas">${drink.measures[2]}</span></figcaption>
            </figure>
            <figure style="display: inline-block">
              <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[3]}-Small.png">
              <figcaption><span class="ingr">${drink.ingredients[3]}</span> <span class="meas">${drink.measures[3]}</span></figcaption>
            </figure>
            <figure style="display: inline-block">
              <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[4]}-Small.png">
              <figcaption><span class="ingr">${drink.ingredients[4]}</span> <span class="meas">${drink.measures[4]}</span></figcaption>
            </figure>
            <figure style="display: inline-block">
              <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[5]}-Small.png">
              <figcaption><span class="ingr">${drink.ingredients[5]}</span> <span class="meas">${drink.measures[5]}</span></figcaption>
            </figure>
            <figure style="display: inline-block">
              <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[6]}-Small.png">
              <figcaption><span class="ingr">${drink.ingredients[6]}</span> <span class="meas">${drink.measures[6]}</span></figcaption>
            </figure>
            <figure style="display: inline-block">
              <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[7]}-Small.png">
              <figcaption><span class="ingr">${drink.ingredients[7]}</span> <span class="meas">${drink.measures[7]}</span></figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[8]}-Small.png">
                <figcaption><span class="ingr">${drink.ingredients[8]}</span> <span class="meas">${drink.measures[8]}</span></figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[9]}-Small.png">
                <figcaption><span class="ingr">${drink.ingredients[9]}</span> <span class="meas">${drink.measures[9]}</span></figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[10]}-Small.png">
                <figcaption><span class="ingr">${drink.ingredients[10]}</span> <span class="meas">${drink.measures[10]}</span></figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[11]}-Small.png">
                <figcaption><span class="ingr">${drink.ingredients[11]}</span> <span class="meas">${drink.measures[11]}</span></figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid img-fig mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[12]}-Small.png">
                <figcaption><span class="ingr">${drink.ingredients[12]}</span> <span class="meas">${drink.measures[12]}</span></figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid img-fig mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[13]}-Small.png">
                <figcaption><span class="ingr">${drink.ingredients[13]}</span> <span class="meas">${drink.measures[13]}</span></figcaption>
              </figure>
              <figure style="display: inline-block">
                <img class="img-fluid img-fig mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredients[14]}-Small.png">
                <figcaption><span class="ingr">${drink.ingredients[14]}</span> <span class="meas">${drink.measures[14]}</span></figcaption>
              </figure>
            </div>
          </li>
          <li class="list-group-item text-justify">${drink.instruction}</li>
        </ul>            
      </div>
    </div>
  `
  elementsDOM.cardDispaly.insertAdjacentHTML('beforeend', outputFullCocktail);

  /*
  let figcaption = document.querySelectorAll('figcaption');
  console.log(figcaption);
  
  figcaption.forEach( ingredientItem => {
    //console.log(ingredientItem);
    if(ingredientItem.innerText == ' ' || ingredientItem.innerText == '' || ingredientItem.innerText == 'null null' || ingredientItem.innerText == 'undefined' || ingredientItem.innerText == 'null' || ingredientItem.innerText == 'null undefined') {
      ingredientItem.parentElement.style.display = 'none';
    }
  });
  */

  let ingr = Array.from(document.querySelectorAll('.ingr'));
  console.log(ingr);
  
  ingr.forEach( ingredientItem => {
    //console.log(ingredientItem);
    if(ingredientItem.textContent == '' || ingredientItem.innerText == ' ' || ingredientItem.innerText == '' || ingredientItem.innerText == 'null null' || ingredientItem.innerText == 'undefined' || ingredientItem.innerText == 'null' || ingredientItem.innerText == 'null undefined') {
      ingredientItem.parentElement.parentElement.style.display = 'none';
    }
    //console.log(ingredientItem.parentElement.parentElement);
    
  });
 
  let meas = Array.from(document.querySelectorAll('.meas'));
  //console.log(meas);
  meas.forEach( ingredientItem => {
    //console.log(ingredientItem);
    if(ingredientItem.textContent == 'undefined' || ingredientItem.innerText == 'null undefined') {
      ingredientItem.textContent = ''
    }
    //console.log(ingredientItem.parentElement.parentElement);
  });
}