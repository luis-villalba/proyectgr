import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';
import { RegistroanteproyectoComponent } from './registroanteproyecto/registroanteproyecto.component';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    ContenidoComponent,
    RegistroanteproyectoComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule,
    FormsModule,
    HomeModule
  ],
})
export class ContenidoModule { }
