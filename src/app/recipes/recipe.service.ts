import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First recipe', 'Some description', 'https://www.colourbox.com/preview/10105211-top-secret-recipe.jpg'),
    new Recipe('Second recipe', 'Some description for second ', 'https://www.colourbox.com/preview/10105211-top-secret-recipe.jpg')
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
