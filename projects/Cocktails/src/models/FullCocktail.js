import axios from 'axios';

export default class FullCocktail{
  constructor(id) {
    this.id = id;
  }

  async getFullCocktail(){
    try{
      const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`); 
      //console.log(res);
      //this.result = res.data.drinks;
      
      this.title = res.data.drinks[0].strDrink;
      this.type = res.data.drinks[0].strAlcoholic;
      this.category = res.data.drinks[0].strCategory;
      this.img = res.data.drinks[0].strDrinkThumb;
      this.glass = res.data.drinks[0].strGlass;
      this.instruction = res.data.drinks[0].strInstructions;
      this.ingredients = [res.data.drinks[0].strIngredient1, res.data.drinks[0].strIngredient2, res.data.drinks[0].strIngredient3,res.data.drinks[0].strIngredient4, res.data.drinks[0].strIngredient5, res.data.drinks[0].strIngredient6, res.data.drinks[0].strIngredient7, res.data.drinks[0].strIngredient8, res.data.drinks[0].strIngredient9, res.data.drinks[0].strIngredient10, res.data.drinks[0].strIngredient11, res.data.drinks[0].strIngredient12, res.data.drinks[0].strIngredient13, res.data.drinks[0].strIngredient14, res.data.drinks[0].strIngredient15];
      this.measures = [res.data.drinks[0].strMeasure1, res.data.drinks[0].strMeasure2, res.data.drinks[0].strMeasure3,res.data.drinks[0].strMeasure4, res.data.drinks[0].strMeasure5, res.data.drinks[0].strMeasure6, res.data.drinks[0].strstrMeasure7, res.data.drinks[0].strstrMeasure8, res.data.drinks[0].strstrMeasure9, res.data.drinks[0].strstrMeasure10, res.data.drinks[0].strMeasure11, res.data.drinks[0].strMeasure12, res.data.drinks[0].strMeasure13, res.data.drinks[0].strMeasure14, res.data.drinks[0].strMeasure15];
      
      //console.log(this.ingredients);
      //console.log(this.measures);
          
    } catch(err) {
      console.log(error); 
    }
  }
}

