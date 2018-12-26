import { Injectable } from '@angular/core';
import { user } from '../Model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  loginForm(user){
    console.log("in the login form::::",user)
    return this.http.post('http://localhost:3000/api/validateUser',user);
  }

}
