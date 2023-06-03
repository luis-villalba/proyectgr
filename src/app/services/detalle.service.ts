import { Injectable } from '@angular/core';
import { Detalle } from '../models/detalle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  private apiUrl = 'http://localhost:3000/detalle';
  constructor(
    private http:HttpClient
  ) { }

  load() {
    return this.http.get( this.apiUrl);
  }



  create(info: Detalle){
return this.http.post(this.apiUrl, info );
  }
}
