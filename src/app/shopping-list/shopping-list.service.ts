import {Ingredient} from '../shared/ingredient.model';

import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<void>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomato', 2),
    new Ingredient('Apple', 5),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit();
  }

  clearIngredients() {
    this.ingredients = [];
    this.ingredientsChanged.emit();
  }
}
