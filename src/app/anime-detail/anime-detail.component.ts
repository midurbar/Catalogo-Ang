import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  animeForm = this.fb.group({
    nombre: [null, Validators.required],
    ep: null,
    tipo: null,
    descrp: null
  })

  constructor(private fb: FormBuilder, private http: HttpClient, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id !== '_nuevo') {
        this.http.get<any>(environment.apiBaseUrl + "animes/" + params.id)
        .subscribe(
          anime => {
            this.animeForm.patchValue(anime)
          },
          error => {
            alert("Error cargando el anime")
          }
        )
      }
    })
  }

  crear() {
    this.http.post(environment.apiBaseUrl + "animes", this.animeForm.value)
      .subscribe(
        anime => {
          alert("Anime creado con éxito")
        },
        error => {
          alert("Error creando el anime: " + error.message)
        })
  }

}