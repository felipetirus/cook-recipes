import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  id: number;
  editMode = false;

  constructor(private recipeService: RecipeService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.editMode = params["id"] != null;
        if (this.editMode) {
          this.recipe = this.recipeService.getRecipe(this.id);
        } else {
          this.recipe = new Recipe("", "", "", []);
        }
      }
    );  
  }

}
