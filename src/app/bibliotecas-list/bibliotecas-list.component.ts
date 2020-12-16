import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bibliotecas-list',
  templateUrl: './bibliotecas-list.component.html',
  styleUrls: ['./bibliotecas-list.component.css']
})
export class BibliotecasListComponent implements OnInit {

  bibliotecas= [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(environment.apiBaseUrl + "bibliotecas")
    .subscribe(bibliotecas => {
      this.bibliotecas = bibliotecas;
    })
  }

}