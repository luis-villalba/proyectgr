import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/items';
  constructor(
    private http:HttpClient,
    private authService: AuthenticationService
  ) { }
  load(username: string) {
    return this.http.get(this.apiUrl);
  }



  create(info: Item): Observable<any> {
    const username = this.authService.getLoggedInUser();
    info.usuario = username;
    return this.http.post(this.apiUrl, info);
  }
  getItemsByUsuario(username: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}?usuario=${username}`);
  }
}
