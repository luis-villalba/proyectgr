import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/users';
  private loggedInUser: string = '';
  constructor(private http: HttpClient) { }

  registerUser(username: string, password: string): Observable<any> {
    const newUser = { username, password };
    return this.http.post(this.apiUrl, newUser);
  }
  loginUser(username: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${username}&password=${password}`);
  }
  setLoggedInUser(username: string) {
    this.loggedInUser = username;
  }

  getLoggedInUser(): string {
    return this.loggedInUser;
  }
}

