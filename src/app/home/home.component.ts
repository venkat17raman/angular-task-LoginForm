import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../users.service';
import { GuradAuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLoggedIn = false;
  constructor(
    private userAuth: GuradAuthService,
    private router: Router,
    private userServ: UsersService
  ) {
    this.userServ.userSubject.subscribe(
      event => {
        this.isLoggedIn = event;
      }
    );
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
