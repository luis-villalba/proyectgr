import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

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



  create(info: Item){
return this.http.post('http://localhost:3000/items', info );
  }
}
