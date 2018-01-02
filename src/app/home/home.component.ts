import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'recipes-home',
    templateUrl : './home.component.html',
})

export class HomeComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router){}

    ngOnInit(){
        if(this.auth.isAuthed()){
            this.router.navigate(['recipe']);
        }
    }


}