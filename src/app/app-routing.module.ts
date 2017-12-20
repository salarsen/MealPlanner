import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './recipes/recipe.component';
import { RecipeNewComponent } from './recipes/new/recipe-new.component';

const routes : Routes = [{
    path : '',
    children: [
        {
            path: 'new',
            component: RecipeNewComponent,
        },{
            path: '***',
            redirectTo: 'home',
            pathMatch: 'full',
        }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]
})

export class AppRoutingModule {}
