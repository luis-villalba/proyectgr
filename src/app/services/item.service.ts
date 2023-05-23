import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(
    private http:HttpClient
  ) { }
  load() {
    return this.http.get('http://localhost:3000/items' );
  }



  create(info: Item): Observable<any> {
    return this.http.post('http://localhost:3000/items', info);
  }
  getItemsByUsuario(username: string): Observable<Item[]> {
    return this.http.get<Item[]>(`http://localhost:3000/items?usuario=${username}`);
  }
}
