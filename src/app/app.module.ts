import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimesListComponent } from './animes-list/animes-list.component';
import { BibliotecasListComponent } from './bibliotecas-list/bibliotecas-list.component';
import { MangasListComponent } from './mangas-list/mangas-list.component';
import { NovelasListComponent } from './novelas-list/novelas-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { MangaDetailComponent } from './manga-detail/manga-detail.component';
import { NovelaDetailComponent } from './novela-detail/novela-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnimesListComponent,
    BibliotecasListComponent,
    MangasListComponent,
    NovelasListComponent,
    UsuariosListComponent,
    AnimeDetailComponent,
    MangaDetailComponent,
    NovelaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
