import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnteproyectoService } from 'src/app/services/anteproyecto.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private anteproyectoService: AnteproyectoService
  ) {}

  login() {
    this.authService.loginUser(this.username, this.password).subscribe((response: any) => {
      if (response.length > 0) {
        this.authService.setLoggedInUser(this.username);

        // Verificar si el usuario tiene un anteproyecto registrado
        from(this.anteproyectoService.getAnteproyectosByUsuario(this.username)).subscribe((response: any) => {
          if (Array.isArray(response) && response.length > 0) {
            // Usuario con anteproyecto registrado, redirigir a la página de detalle del anteproyecto
            this.router.navigate(['/contenido']);
          } else {
            // Estudiante sin anteproyecto registrado
            this.router.navigate(['/registroanteproyecto']);
          }
        });
      } else {
        alert('Credenciales inválidas');
      }
    });
  }


}
