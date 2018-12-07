import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signup: SignupService,
    private router: Router) { }

  ngOnInit() {
  }
  handlesubmit(SignupForm) {
    this.signup.postSignup(SignupForm.value)
      .subscribe((data) => {
        alert("register successfullay");
        this.router.navigate(['/login']);
      }, (err) => {
      });
  }
}
