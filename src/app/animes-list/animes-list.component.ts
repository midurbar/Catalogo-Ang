import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {
  animes= [];

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:3000/api/animes")
    .subscribe(animes => {
      this.animes = animes;
    })
  }

}