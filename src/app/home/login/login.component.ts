import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';

import { User } from '../../user';

@Component({
    selector: 'recipes-login',
    templateUrl: './login.component.html',
})

export class LoginComponent {
    user: User = new User();
    
    loginErrors: string[] = [];

    constructor(private auth: AuthService, private router: Router) { }

    onSubmit(): void {
        this.auth.login(this.user)
            .then(() => this.router.navigate(['recipe']))
            .catch(response => this.handleErrors(response.json()));
    }

    private handleErrors(errors : string[] | Error) : void {
        this.loginErrors = Array.isArray(errors) ? errors : [errors.message];
    }
}