import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnteproyectoService } from 'src/app/services/anteproyecto.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  anteproyecto: any;
  items: any[];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private anteproyectoService: AnteproyectoService
  ) {
    this.anteproyecto = null;
    this.items = [];
  }

  ngOnInit() {
    const username = this.authService.getLoggedInUser();
    this.anteproyectoService.getAnteproyectosByUsuario(username).subscribe(
      (response: Object) => {
        if (Array.isArray(response) && response.length > 0) {
          this.anteproyecto = response[0];
          if (this.anteproyecto.id) {
            this.getItems(this.anteproyecto.id);
          } else {
            console.error('El anteproyecto no tiene una propiedad "id":', this.anteproyecto);
            // Manejar el caso cuando el anteproyecto no tiene una propiedad "id"
            // Puedes mostrar un mensaje de error o realizar otra acción adecuada
          }
        }
      },
      (error: any) => {
        console.error('Error al obtener los anteproyectos:', error);
        // Manejar el error de obtener los anteproyectos
        // Puedes mostrar un mensaje de error o realizar otra acción adecuada
      }
    );
  }



  getItems(anteproyectoId: number) {
    this.anteproyectoService.getItemsByAnteproyecto(anteproyectoId).subscribe((response: any) => {
      if (Array.isArray(response)) {
        this.items = response; // Asigna los items al atributo "items"
      } else {
        console.error('La respuesta no es un array:', response);
        // Manejar el caso cuando la respuesta no es un array
        // Puedes mostrar un mensaje de error o realizar otra acción adecuada
      }
    });
  }}

