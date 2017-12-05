import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe : Recipe = new Recipe();

  sourceSelector : string = null;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();
    console.log(`We submitted a recipe!`);
    console.log(form.value);
    // form.reset();
  }
}
