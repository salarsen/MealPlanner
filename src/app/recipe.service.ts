import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Recipe } from './recipe';

import 'rxjs/add/operator/map';
import { Response } from '@angular/http/src/static_response';

@Injectable()

export class recipeService {
    // public static base = '';

    public static base = '/api/recipes/';
    constructor(private http: Http){}

    getRecipes(): Observable<Recipe[]> {
        return this.http.get(recipeService.base)
            .map(response => response.json());
    }

    removeRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.delete(`${ recipeService.base }${ recipe._id }`)
            .map(response => response.json());
    }

    createRecipe(recipe: Recipe): Observable<Recipe> {
        // console.log('Attempting to add a recipe', recipe);
        return this.http.post(recipeService.base, recipe)
            .map(response => response.json());
    }

    getRecipe(id: string): Observable<Recipe> {
        return this.http.get(`${recipeService.base}${id}`)
            .map(response => response.json());
    }

    updateRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.patch(recipeService.base,recipe)
            .map(response => response.json());
    }
}