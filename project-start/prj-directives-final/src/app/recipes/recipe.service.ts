import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
      new Recipe(
         'Tasty Schitzel', 
         'A special Schitzel, this is recipe remeber my old childhood', 
         'https://media.istockphoto.com/photos/tasty-schnitzel-with-cucumber-salad-picture-id944084736?k=6&m=944084736&s=170667a&w=0&h=8OX1w_uzoPHSPTpfRxv05KW1ai7-xdkzkZeGTo9Gmws=',
         [
            new Ingredient('Chicken Meat', 1),
            new Ingredient('Lemon', 4),
            new Ingredient('Breadcrumbs', 6),
            new Ingredient('Soy oil', 2)
         ]),
      new Recipe(
         'Big Burguer', 
         'This is a BIG SPECIAL AND DELICIUS BURGUER!', 
         'https://digaolanches.com.br/site/wp-content/uploads/2019/09/big-burguer.png',
         [
            new Ingredient('Meat', 1),
            new Ingredient('Bacon', 5),
            new Ingredient ('Lettuce', 3),
            new Ingredient('Onion', 2),
            new Ingredient('French Fries', 20),
            new Ingredient('Bread', 3)
         ])
    ];

   getRecipes() {
      return this.recipes.slice();
   }
}