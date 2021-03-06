import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {

  mangaForm = this.fb.group({
    nombre: [null, Validators.required],
    vol: null,
    tipo: null,
    descrp: null
  })

  id= undefined;
  constructor(private fb: FormBuilder, private http: HttpClient, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id !== '_nuevo') {
        this.http.get<any>(environment.apiBaseUrl + "mangas/" + params.id)
        .subscribe(
          manga => {
            this.mangaForm.patchValue(manga);
            this.id = manga.id;
          },
          error => {
            alert("Error cargando el manga")
          }
        )
      }
    })
  }

  crear() {
    this.http.post(environment.apiBaseUrl + "mangas", this.mangaForm.value)
      .subscribe(
        manga => {
          alert("Manga creado con éxito");
          this.router.navigate(["mangas"]);
        },
        error => {
          alert("Error creando el manga: " + error.message)
        })
  }

  modificar() {
    this.http.put<any>(
      environment.apiBaseUrl + "mangas/" + this.id,
      this.mangaForm.value)
    .subscribe(
      manga => {
        alert("Manga actualizado");
        this.router.navigate(["mangas"]);
      },
      error => {
        alert("Error actualizando el manga" + error.message);
      }
    )
  }

  eliminar() {
    if (confirm("¿Esta seguro?")) {
      this.http.delete<any>(
        environment.apiBaseUrl + "mangas/" + this.id,
        this.mangaForm.value)
      .subscribe(
        () => {
          alert("Manga eliminado con exito");
          this.router.navigate(["mangas"]);
        },
        error => {
          alert("Error eliminando el manga" + error.message);
        }
      )
    }
  }

}