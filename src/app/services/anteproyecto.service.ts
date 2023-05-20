import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnteproyectoService {
  private apiUrl =  'http://localhost:3000/anteproyectos';
  constructor(private http: HttpClient) { }

  createAnteproyecto(anteproyecto: any) {
    return this.http.post(`${this.apiUrl}`, anteproyecto);
  }

  getAnteproyectosByUsuario(usuario: string) {
    return this.http.get(`${this.apiUrl}?usuario=${usuario}`);
  }
  getItemsByAnteproyecto(anteproyectoId: number) {
    return this.http.get(`${this.apiUrl}/${anteproyectoId}/items`);
  }
}
