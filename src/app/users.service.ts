import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from '../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userSubject = new BehaviorSubject(false);
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(
    private http: HttpClient
  ) { }
  userPost(data) {
    return this.http.post('http://localhost:3000/usermenu', data);
  }
  userGet() {
    return this.http.get('http://localhost:3000/usermenu');
  }

  userGetById(id) {
    return this.http.get(`http://localhost:3000/usermenu/${id}`);
  }

  userDelete(data) {
    const id = data._id;
    return this.http.delete(`http://localhost:3000/usermenu/${id}`);
  }

}
