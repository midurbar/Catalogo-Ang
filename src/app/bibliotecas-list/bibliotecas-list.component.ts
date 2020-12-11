import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bibliotecas-list',
  templateUrl: './bibliotecas-list.component.html',
  styleUrls: ['./bibliotecas-list.component.css']
})
export class BibliotecasListComponent implements OnInit {

  bibliotecas= [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:3000/api/bibliotecas")
    .subscribe(bibliotecas => {
      this.bibliotecas = bibliotecas;
    })
  }

}