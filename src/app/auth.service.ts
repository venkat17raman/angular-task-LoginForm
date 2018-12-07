import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GuradAuthService {

  constructor(private router: Router
  ) { }

  logout() {
    return localStorage.removeItem('token');
  }

  loginUser() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.loginUser() !== null;
  }
  canActivate() {
    return this.isLoggedIn();
  }
}
