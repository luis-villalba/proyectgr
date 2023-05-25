import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContenidoComponent } from '../contenido/contenido.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RegistroanteproyectoComponent } from '../contenido/registroanteproyecto/registroanteproyecto.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },

  { path: 'contenido', component: ContenidoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registroanteproyecto', component: RegistroanteproyectoComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
