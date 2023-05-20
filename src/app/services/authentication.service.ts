import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedInUser: string = '';
  constructor() { }

  setLoggedInUser(username: string) {
    this.loggedInUser = username;
  }

  getLoggedInUser(): string {
    return this.loggedInUser;
  }
}

