class UI{
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showProfile(drinks) {
    const inputText = searchIngredient.value.toUpperCase();
    let output = `<p>We found ${drinks.length} cocktails with ingredient - <b>${inputText}</b></p>`;
    drinks.forEach(({ strDrink, strDrinkThumb }) => { 
      output += `
        <div class="card col-md-3 col-sm-3 col-xs-2 text-white bg-dark mb-3" style="display: inline-block; width: 120px;">
          <div class="card-header p-2" style="height:60px">${strDrink}</div>
          <div class="card-body p-0">
            <img class="img-fluid mb-2" src="${strDrinkThumb}">
          </div>
          <button type="button" class="btn btn-description btn-outline-secondary btn-block mb-2">
            View
          </button>
        </div>
        `
      this.profile.innerHTML = output; 
    })
}
  
  showNameProfile(drinks) {
    const inputText = searchName.value.toUpperCase();
    let outputFull = `<p>We found ${drinks.length} cocktails with name <b>${inputText}</b></p>`;
    drinks.forEach( drink => {
      const drinkCopy = Object.assign(drink);
      const keys = Object.keys(drinkCopy).filter(key => key.includes('strIngredient'));
      const values = Object.keys(drinkCopy).filter(key => key.includes('strMeasure'));
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
        `
      keys.forEach((key, index) => {
        if(drink[keys[index]].trim().length){
          outputFull += `
            <figure style="display: inline-block">
              <img class="img-fluid mb-2" src="https://www.thecocktaildb.com/images/ingredients/${drink[keys[index]]}-Small.png">
              <figcaption>${drink[keys[index]]} ${drink[values[index]]}</figcaption>
            </figure>        
          `
        }
      })
      outputFull +=
                  `</div>                 
                  <li class="list-group-item text-justify">${drink.strInstructions}</li>
                </ul>
              </div>
            </div>
          </div> 
        `
      this.profile.innerHTML = outputFull;
    })
    let figure = document.querySelectorAll('figure');
    const forbiddenWords = ['null', '↵'];
    figure.forEach( ingredientItem => {
      if(forbiddenWords.includes(ingredientItem.childNodes[3].textContent.trim())){
        ingredientItem.style.display = 'none';
      }
    })       
  }

  showAlert(message){
    const div = document.createElement('div');
    div.className = 'alert alert-dismissible alert-info';
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const search = document.querySelector('.search');
    container.insertBefore(div, search);
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }
}