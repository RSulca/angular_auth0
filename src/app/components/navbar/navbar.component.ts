import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  auth2;
  constructor( private auth: AuthService ) { 
    this.auth2=auth;
   }


  login(){
    this.auth.login();
  }

  logOut(){
    this.auth.logout();   
  }
}
