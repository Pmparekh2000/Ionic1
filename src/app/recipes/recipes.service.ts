import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Dosa',
      imageUrl: 'https://images.app.goo.gl/AogshAm5KZXYArwM6',
      ingredients: ['Batter', 'Coconut']
    },
    {
      id: 'r2',
      title: 'Idli',
      imageUrl: 'https://images.app.goo.gl/5jFFbLgGAqot9xgx6',
      ingredients: ['Batter', 'Coconut']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
