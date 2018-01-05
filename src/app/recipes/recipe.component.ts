import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
})

export class RecipeComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router){}

    ngOnInit(): void {
        // console.log('Authed',this.auth.isAuthed());
        if(!this.auth.isAuthed()) this.router.navigate(['home']);

        //stop sub-components from loading here
    }
}
