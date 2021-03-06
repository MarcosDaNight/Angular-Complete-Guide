import { Ingredient } from './../../shered/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() igredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmoumt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmoumt);

    console.log(newIngredient.name + " onAddItem")
    this.igredientAdded.emit(newIngredient);

  }

}

