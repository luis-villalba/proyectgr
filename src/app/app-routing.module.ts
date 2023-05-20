import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modulos/home/login/login.component';
import { RegistroanteproyectoComponent } from './modulos/contenido/registroanteproyecto/registroanteproyecto.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modulos/home/home.module').then(m => m.HomeModule)
  },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
