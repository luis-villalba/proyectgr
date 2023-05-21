import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';
import { RegistroanteproyectoComponent } from './registroanteproyecto/registroanteproyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { HomeModule } from '../home/home.module';
import { RegistraritemsComponent } from './registraritems/registraritems.component';


@NgModule({
  declarations: [
    ContenidoComponent,
    RegistroanteproyectoComponent,
    ItemsComponent,
    RegistraritemsComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule
  ],
})
export class ContenidoModule { }
