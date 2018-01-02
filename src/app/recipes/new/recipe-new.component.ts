import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Recipe } from '../../recipe';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  recipe : Recipe = new Recipe();

  @Output()
  addRecipe = new EventEmitter<Recipe>();

  // sourceSelector : string = null;

  constructor(
    private recipeService: recipeService,
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();
    
    this.recipeService.createRecipe(form.value)
      .subscribe(recipe => {
        this.addRecipe.emit(recipe);
        this.recipe = new Recipe();
        form.reset();
      },
        error => {
          console.log(`Errors creating recipe: ${error}`);
      });
    console.log(`We submitted a recipe!`);
    }
}
