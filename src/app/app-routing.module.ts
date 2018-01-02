import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './home/register/register.component';

import { RecipeComponent } from './recipes/recipe.component';
import { RecipeNewComponent } from './recipes/new/recipe-new.component';
import { RecipeTableComponent } from './recipes/recipe-table/recipe-table.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes : Routes = [
    {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full',
    },
    {
        path : 'home',
        component : HomeComponent,
    },
    {
        path: 'recipe',
        component : RecipeComponent,
        children : [
            {
                path : '',
                redirectTo: 'recipesTable',
                pathMatch: 'full',
            },
            {
                path: 'recipesTable',
                component: RecipeTableComponent,
            },
            {
                path : 'newRecipe',
                component : RecipeNewComponent,
            },
            {
                path : 'editRecipe/:id',
                component: RecipeEditComponent,
            }
        ]
    },
    // {
    //     path: 'recipe',
    //     component : RecipeNewComponent,
    // },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]
})

export class AppRoutingModule {}
