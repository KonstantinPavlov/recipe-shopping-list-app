import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addIngredient = new EventEmitter<Ingredient>();
  @Output() onClearButton = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    this.addIngredient.emit(new Ingredient(name.value, amount.valueAsNumber));
  }

  onClear() {
    this.onClearButton.emit();
  }
}
