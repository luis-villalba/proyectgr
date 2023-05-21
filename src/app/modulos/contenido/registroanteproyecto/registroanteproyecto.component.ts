import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnteproyectoService } from 'src/app/services/anteproyecto.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-registroanteproyecto',
  templateUrl: './registroanteproyecto.component.html',
  styleUrls: ['./registroanteproyecto.component.sass']
})
export class RegistroanteproyectoComponent {
  nombreAnteproyecto: string;
  descripcion: string;

  constructor(private anteproyectoService: AnteproyectoService, private authService: AuthenticationService, private router: Router) {
    this.nombreAnteproyecto = '';
    this.descripcion = '';
  }

  registrarAnteproyecto() {
    const anteproyecto = {
      nombre: this.nombreAnteproyecto,
      descripcion: this.descripcion,
      usuario: this.authService.getLoggedInUser()
    };

    this.anteproyectoService.createAnteproyecto(anteproyecto).subscribe(() => {
      alert('Anteproyecto registrado exitosamente');
      this.router.navigate(['/contenido']); // Redirige al componente DetalleAnteproyectoComponent
    });
  }
}
