import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.css']
})
export class RecipeTableComponent implements OnInit {

  recipes: Array<Recipe> = [];
  errorMessage : String;

  constructor(
    private recipeService: recipeService,
  ) { }

  ngOnInit(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => {
        this.recipes = recipes;
        console.log(this.recipes);
      }, error => {
        console.log(`There was an error: ${ error }`);
        // this.errorMessage = error;
      }
    )
  }

  removeRecipe(event: Event, recipeId: string){
    event.stopPropagation();
    console.log('Removing: ',recipeId);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }

}
