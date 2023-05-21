import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido.component';
import { HomeComponent } from '../home/home.component';
import { RegistroanteproyectoComponent } from './registroanteproyecto/registroanteproyecto.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { RegistraritemsComponent } from './registraritems/registraritems.component';

const routes: Routes = [
  { path: 'contenido', component: ContenidoComponent },
  {path: '', component: HomeComponent },
  {path: 'registroanteproyecto', component: RegistroanteproyectoComponent },
  {path: 'items', component: ItemsComponent },
  {path: 'registraritems', component: RegistraritemsComponent },
  {
    path:'footer', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule,
    FormsModule],
  exports: [RouterModule]
})
export class ContenidoRoutingModule { }
