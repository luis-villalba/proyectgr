import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  username!: string;
  password!: string;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}
  register() {
    this.authService.registerUser(this.username, this.password).subscribe(() => {
      alert(' registrado exitosamente');
      this.router.navigate(['/home']);
    });
  }

}
