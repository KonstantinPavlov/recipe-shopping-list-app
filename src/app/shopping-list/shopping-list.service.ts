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

  addIngredient(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.ingredientsChanged.emit();
  }

  clearIngredients() {
    this.ingredients = [];
    this.ingredientsChanged.emit();
  }
}
