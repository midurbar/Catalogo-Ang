import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  usuarios= [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:3000/api/usuarios")
    .subscribe(usuarios => {
    this.usuarios = usuarios;
    })
  }

}