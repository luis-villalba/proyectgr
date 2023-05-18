import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modulos/home/home.component';
import { ContenidoComponent } from './modulos/contenido/contenido.component';
import { RegistroitemsComponent } from './modulos/contenido/registroitems/registroitems.component';

@NgModule({
  declarations: [
    AppComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
