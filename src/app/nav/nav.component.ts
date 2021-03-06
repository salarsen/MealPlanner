import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() links : string[];
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(event : Event) : void {
    event.stopPropagation();
    this.auth.logout()
      .then(() => this.router.navigate(['home']))
      .catch(response => console.log(response.json()));
  }
}
