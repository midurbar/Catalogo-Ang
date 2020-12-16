import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mangas-list',
  templateUrl: './mangas-list.component.html',
  styleUrls: ['./mangas-list.component.css']
})
export class MangasListComponent implements OnInit {

  mangas= [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(environment.apiBaseUrl + "mangas")
    .subscribe(mangas => {
      this.mangas = mangas;
    })
  }

}