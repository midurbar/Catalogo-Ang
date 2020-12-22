import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

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

  id= undefined;
  constructor(private fb: FormBuilder, private http: HttpClient, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id !== '_nuevo') {
        this.http.get<any>(environment.apiBaseUrl + "novelas/" + params.id)
        .subscribe(
          novela => {
            this.novelaForm.patchValue(novela);
            this.id = novela.id;
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
          alert("Novela creada con éxito");
          this.router.navigate(["novelas"]);
        },
        error => {
          alert("Error creando la novela: " + error.message)
        })
  }

  modificar() {
    this.http.put<any>(
      environment.apiBaseUrl + "novelas/" + this.id,
      this.novelaForm.value)
    .subscribe(
      novela => {
        alert("Novela actualizada");
        this.router.navigate(["novelas"]);
      },
      error => {
        alert("Error actualizando la novela" + error.message);
      }
    )
  }

  eliminar() {
    if (confirm("¿Esta seguro?")) {
      this.http.delete<any>(
        environment.apiBaseUrl + "novelas/" + this.id,
        this.novelaForm.value)
      .subscribe(
        () => {
          alert("Novela eliminada con exito");
          this.router.navigate(["novelas"]);
        },
        error => {
          alert("Error eliminando la novela" + error.message);
        }
      )
    }
  }

}