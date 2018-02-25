import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onClearButton = new EventEmitter<void>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    this.shoppingListService.addIngredient(name.value, amount.valueAsNumber);
  }

  onClear() {
    this.shoppingListService.clearIngredients();
  }
}
