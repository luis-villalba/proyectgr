import { Injectable } from '@angular/core';
import { Detalle } from '../models/detalle';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {

  constructor(
    private http:HttpClient
  ) { }

  load() {
    return this.http.get('http://localhost:3000/detalle' );
  }



  create(info: Detalle){
return this.http.post('http://localhost:3000/detalle', info );
  }
}
