import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(
    private http:HttpClient,
    private authService: AuthenticationService
  ) { }
  load(username: string) {
    return this.http.get('http://localhost:3000/items' );
  }



  create(info: Item): Observable<any> {
    const username = this.authService.getLoggedInUser();
    info.usuario = username;
    return this.http.post('http://localhost:3000/items', info);
  }
  getItemsByUsuario(username: string): Observable<Item[]> {
    return this.http.get<Item[]>(`http://localhost:3000/items?usuario=${username}`);
  }
}
