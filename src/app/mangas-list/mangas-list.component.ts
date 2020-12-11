import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mangas-list',
  templateUrl: './mangas-list.component.html',
  styleUrls: ['./mangas-list.component.css']
})
export class MangasListComponent implements OnInit {

  mangas= [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:3000/api/mangas")
    .subscribe(mangas => {
      this.mangas = mangas;
    })
  }

}