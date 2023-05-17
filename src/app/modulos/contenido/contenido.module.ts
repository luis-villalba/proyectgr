import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenidoRoutingModule } from './contenido-routing.module';
import { ContenidoComponent } from './contenido.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { RegistroitemsComponent } from './registroitems/registroitems.component';
import { RegistroanteproyectoComponent } from './registroanteproyecto/registroanteproyecto.component';


@NgModule({
  declarations: [
    ContenidoComponent,
    ConsultaComponent,
    RegistroitemsComponent,
    RegistroanteproyectoComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule
  ]
})
export class ContenidoModule { }
