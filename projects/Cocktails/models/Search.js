import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  //********************************************//
  // Method for search cocktails by ingredient
  async getIngredient() {
    try{
      const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.query}`);
      this.result = res.data.drinks;
      //console.log(res);
      //console.log(this.query);
      //console.log(this.result, this.result.length);      
    } catch(error) {
      alert(error);
    }
  }

  //***********************************//
  // Method for search cocktails by name
  async getCocktailName() {
    try{
      const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.query}`);
      this.result = res.data.drinks;
      //console.log(res);
      //console.log(this.query);
      //console.log(this.result, this.result.length);
       
    } catch(error) {
      alert(error);
    }
  }
}
