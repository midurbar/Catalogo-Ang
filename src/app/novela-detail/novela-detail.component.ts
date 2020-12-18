import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novela-detail',
  templateUrl: './novela-detail.component.html',
  styleUrls: ['./novela-detail.component.css']
})
export class NovelaDetailComponent implements OnInit {

  novelaForm = this.fb.group({
    nombre: [null, Validators.required],
    vol: null,
    tipo: null,
    descrp: null
  })

  constructor(private fb: FormBuilder, private http: HttpClient, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id !== '_nuevo') {
        this.http.get<any>(environment.apiBaseUrl + "novelas/" + params.id)
        .subscribe(
          novela => {
            this.novelaForm.patchValue(novela)
          },
          error => {
            alert("Error cargando la novela")
          }
        )
      }
    })
  }

  crear() {
    this.http.post(environment.apiBaseUrl + "novelas", this.novelaForm.value)
      .subscribe(
        novela => {
          alert("Novela creada con éxito")
        },
        error => {
          alert("Error creando la novela: " + error.message)
        })
  }

}