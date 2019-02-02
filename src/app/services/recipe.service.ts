import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "./shopping-service";

@Injectable()
export class RecipeService {

    constructor(private shoppingService: ShoppingService) {}

    private recipesList: Recipe[] = [
        new Recipe(
            "Guacamole",
            "Guaca dos Deuses",
            "https://i.ytimg.com/vi/tHVzFLtvbGQ/maxresdefault.jpg",
            [
                new Ingredient("Abacate", 1),
                new Ingredient("Tomate", 2),
                new Ingredient("Limao", 1),
                new Ingredient("Alho", 2),
                new Ingredient("Pimenta do reino", 1),
                new Ingredient("Sal", 1)
            ]),
        new Recipe(
            "Chille",
            "Chille da Mila Linda",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDi_fdC3sRqkNdHpKIrE3TLC5wZhx-cfHSGAuho_N3SGA2cpn4Q",
            [
                new Ingredient("Proteina", 1),
                new Ingredient("Feijao vermelho", 2),
                new Ingredient("Pimentao", 1),
                new Ingredient("Alho", 2),
                new Ingredient("Pimenta Dedo de moca", 1),
                new Ingredient("Tomate", 1)
            ]
        )
    ];

    editRecipeEmitter : EventEmitter<Recipe> = new EventEmitter();

    getRecipeList() {
        return this.recipesList.slice();
    }

    getRecipe(id: number) {
        return this.recipesList[id];
    }

    editRecipe(recipe: Recipe) {
        this.editRecipeEmitter.emit(recipe);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addListIngredient(ingredients);
    }
}