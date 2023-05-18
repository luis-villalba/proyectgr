import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl =' http://localhost:3000/users';

  constructor(private  http: HttpClient) {}
  login(username: string , password : string): Observable<any> {
    const body = { username , password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

}
