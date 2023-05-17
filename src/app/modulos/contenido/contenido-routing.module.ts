import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroitemsComponent } from './registroitems/registroitems.component';
import { ContenidoComponent } from './contenido.component';

const routes: Routes = [
  { path: 'contenido', component: ContenidoComponent },
  { path: '', component: RegistroitemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidoRoutingModule { }
