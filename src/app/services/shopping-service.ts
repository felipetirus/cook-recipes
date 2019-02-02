import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private shoppingList: Ingredient[] = [
        new Ingredient("Apples", 2),
        new Ingredient("Tomatos", 10)
      ];
      
    getShoppingList() {
        return this.shoppingList.slice();
    }

    addNewIngredient(ingredient: Ingredient) {
        this.shoppingList.push(ingredient);
        this.ingredientChanged.emit(this.shoppingList.slice());
    }

    addListIngredient(ingredients: Ingredient[]) {
        this.shoppingList.push(...ingredients);
        this.ingredientChanged.emit(this.shoppingList.slice());
    }
}