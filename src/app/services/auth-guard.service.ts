import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _auth:AuthService) { }

  canActivate(  ){
    if(this._auth.loggedIn === true){      
      return true;
    }else{
      return false;
    }
  }
}
