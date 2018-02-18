import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First recipe', 'Some description', 'https://www.colourbox.com/preview/10105211-top-secret-recipe.jpg'),
    new Recipe('Second recipe', 'Some description for second ', 'https://www.colourbox.com/preview/10105211-top-secret-recipe.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
