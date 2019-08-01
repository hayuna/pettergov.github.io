class Cocktail{
  constructor() {
  
  }

  async getCocktailByIngredient(ingredient) {
    const profileResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const profile = await profileResponse.json();
    console.log(profileResponse);
    console.log(profile); 
    console.log(ingredient);

    if(profileResponse.status == 200, 'ok') {
      console.log('Ok');
      return {
        profile
      }
    } 
  }

  async getCocktailByName(name) {
    const namesResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const profileName = await namesResponse.json();
    //console.log(profileName);
    if(namesResponse.status == 200, 'ok') {
      console.log('Ok');
      console.log(namesResponse);
      console.log(profileName);
      
      
      return {
        profileName
      }
    } 
  } 
}


