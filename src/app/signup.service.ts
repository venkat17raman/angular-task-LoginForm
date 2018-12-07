import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  postSignup(data) {
    return this.http.post('http://localhost:3000/signup', data);
  }
}
