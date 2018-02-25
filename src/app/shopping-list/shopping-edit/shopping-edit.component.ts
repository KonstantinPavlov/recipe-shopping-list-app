import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    const nameEl = name.value;
    const amountEl = amount.valueAsNumber;
    const temp = new Ingredient(nameEl, amountEl);
    this.shoppingListService.addIngredient(temp);
  }

  onClear() {
    this.shoppingListService.clearIngredients();
  }
}
