import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimesListComponent } from './animes-list/animes-list.component';
import { BibliotecasListComponent } from './bibliotecas-list/bibliotecas-list.component';
import { MangasListComponent } from './mangas-list/mangas-list.component';
import { NovelasListComponent } from './novelas-list/novelas-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { MangaDetailComponent } from './manga-detail/manga-detail.component';
import { NovelaDetailComponent } from './novela-detail/novela-detail.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';


const routes: Routes = [
  { path: 'animes', component: AnimesListComponent },
  { path: 'animes/:id', component: AnimeDetailComponent},
  { path: 'bibliotecas', component: BibliotecasListComponent},
  { path: 'mangas', component: MangasListComponent},
  { path: 'mangas/:id', component: MangaDetailComponent},
  { path: 'novelas', component: NovelasListComponent},
  { path: 'novelas/:id', component: NovelaDetailComponent},
  { path: 'usuarios', component: UsuariosListComponent},
  { path: 'usuarios/:id', component: UsuarioDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }