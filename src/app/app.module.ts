import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimesListComponent } from './animes-list/animes-list.component';
import { BibliotecasListComponent } from './bibliotecas-list/bibliotecas-list.component';
import { MangasListComponent } from './mangas-list/mangas-list.component';
import { NovelasListComponent } from './novelas-list/novelas-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimesListComponent,
    BibliotecasListComponent,
    MangasListComponent,
    NovelasListComponent,
    UsuariosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
