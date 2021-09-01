import { Ingredient } from './../shered/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 3),
    new Ingredient('Black Spice', 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIgredientAdded(ingredient: Ingredient) {
    console.log(ingredient + " onIgredientAdded")
    this.ingredients.push(ingredient);
  }
}
