import { newOwner, newUser } from './../model/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/data';
@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  urlOwner = "http://localhost:3000/login_owner";
  urlUser = "http://localhost:3000/login_user";
  registerUrlOwner = "http://localhost:3000/new_owner";
  registerUrlUser = "http://localhost:3000/new_user";
  constructor(
    private http: HttpClient,
  ) { }

  loginOwner(user: User ) {
    const reqHeader = new HttpHeaders({});
    return this.http.post(this.urlOwner, user, {headers: reqHeader});
  }

  loginUser(user: User ) {
    const reqHeader = new HttpHeaders({});
    return this.http.post(this.urlUser, user, {headers: reqHeader});
  }

  registerOwner(newOwner : newOwner){
    const reqHeader = new HttpHeaders({});
    return this.http.post(this.registerUrlOwner, newOwner, {headers: reqHeader});
  }
  
  registerUser(newOwner : newUser){
    const reqHeader = new HttpHeaders({});
    return this.http.post(this.registerUrlUser, newOwner, {headers: reqHeader});
  }
}
