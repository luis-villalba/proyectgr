import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modulos/home/home.component';
import { ContenidoComponent } from './modulos/contenido/contenido.component';
import { RegistroitemsComponent } from './modulos/contenido/registroitems/registroitems.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modulos/home/home.module').then(m=>m.HomeModule)},

  {path: '', loadChildren: () => import('./modulos/contenido/contenido.module').then(m =>m.ContenidoModule)},

  { path: '', component:HomeComponent},
 { path: '', component: ContenidoComponent },
 { path: '', component: RegistroitemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
