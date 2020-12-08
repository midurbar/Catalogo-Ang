import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimesListComponent } from './animes-list/animes-list.component';
import { BibliotecasListComponent } from './bibliotecas-list/bibliotecas-list.component';
import { MangasListComponent } from './mangas-list/mangas-list.component';
import { NovelasListComponent } from './novelas-list/novelas-list.component';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

const routes: Routes = [
  { path: 'animes', component: AnimesListComponent },
  { path: 'bibliotecas', component: BibliotecasListComponent},
  { path: 'mangas', component: MangasListComponent},
  { path: 'novelas', component: NovelasListComponent},
  { path: 'usuarios', component: UsuariosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }