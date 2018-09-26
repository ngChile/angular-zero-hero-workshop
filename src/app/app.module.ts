import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { PersonajeComponent } from './personaje/personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonajesComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: ListaPersonajesComponent }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
