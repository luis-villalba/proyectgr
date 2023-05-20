import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { LoginRequest } from 'src/app/services/loginRequest';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginError: string = "";
  loginForm = this.formBuilder.group({
    email: ['lvillalba@unipacifico.edu.co', [Validators.required, Validators.email]],
    password: ['', Validators.required],

  })
  constructor(private formBuilder: FormBuilder, private router: Router, private loginSevice: LoginService) { }
  ngOnInit(): void {

  }
  get email() {

    return this.loginForm.controls.email;

  }
  get password() {

    return this.loginForm.controls.password

  }
  login() {
    if (this.loginForm.valid) {
      this.loginSevice.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("login comnpleto");
          this.router.navigateByUrl('/contenido');
          this.loginForm.reset();
        }
      })

    }
    else {
      this.loginForm.markAllAsTouched();
      alert("error")
    }
  }

}
