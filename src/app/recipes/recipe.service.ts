import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('First recipe', 'Some description', 'https://www.colourbox.com/preview/10105211-top-secret-recipe.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Egg', 2)
      ]
    ),
    new Recipe('Second recipe', 'Some description for second ', 'https://www.colourbox.com/preview/10105211-top-secret-recipe.jpg',
      [
        new Ingredient('Tomato', 2),
        new Ingredient('Lemon', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }
}
