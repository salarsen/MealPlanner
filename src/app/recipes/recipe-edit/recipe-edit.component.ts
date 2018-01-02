import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipeService } from '../../recipe.service';

import { Recipe } from '../../recipe';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeId : string;

  recipe: Recipe = new Recipe();
  
  constructor(
    private route: ActivatedRoute,  
    private recipeService: recipeService,
  ) { }
  
  ngOnInit() {
    this.route.paramMap.switchMap(params => {
      return this.recipeService.getRecipe(params.get('id'));
    })
    .subscribe(recipe => {
      console.log(`Got recipe:`,recipe);
      this.recipe = recipe;
    },
    error => {
      console.log(`Got an error: ${error}`)
    });
  }

}
