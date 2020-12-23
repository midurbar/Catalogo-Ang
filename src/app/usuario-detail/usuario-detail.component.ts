import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  usuarioForm = this.fb.group({
    nombre: [null, Validators.required],
    email: null,
    password: null,
    repassword: null
  })

  id= undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id !== '_nuevo') {
        this.http.get<any>(environment.apiBaseUrl + "usuarios/" + params.id)
        .subscribe(
          usuario => {
            this.usuarioForm.patchValue(usuario);
            this.id = usuario.id;
          },
          error => {
            alert("Error cargando el usuario")
          }
        )
      } 
    })
  }

  crear() {
    if (this.usuarioForm.value.password == this.usuarioForm.value.repassword) {
      this.http.post(environment.apiBaseUrl + "usuarios", this.usuarioForm.value)
        .subscribe(
          usuario => {
            alert("Usuario creado con éxito")
            this.router.navigate(["usuarios"]);
          },
          error => {
            alert("Error creando el usuario: " + error.message)
        })
    } else {
      alert("Los campos contraseña no coinciden");
    }
  }

  modificar() {
    if (this.usuarioForm.value.password == this.usuarioForm.value.repassword) {
      this.http.put<any>(
        environment.apiBaseUrl + "usuarios/" + this.id,
        this.usuarioForm.value)
      .subscribe(
        usuario => {
          alert("Usuario actualizado");
          this.router.navigate(["usuarios"]);
        },
        error => {
          alert("Error actualizando el usuario" + error.message);
        }
      )
    } else {
      alert("Los campos contraseña no coinciden");
    }
  }

  eliminar() {
    if (confirm("¿Esta seguro?")) {
      this.http.delete<any>(
        environment.apiBaseUrl + "usuarios/" + this.id,
        this.usuarioForm.value)
      .subscribe(
        () => {
          alert("Usuario eliminado con exito");
          this.router.navigate(["usuarios"]);
        },
        error => {
          alert("Error eliminando el usuario" + error.message);
        }
      )
    }
  }

}