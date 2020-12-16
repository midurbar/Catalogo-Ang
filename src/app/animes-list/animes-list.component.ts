import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {

  animes= [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(environment.apiBaseUrl + "animes")
    .subscribe(animes => {
      this.animes = animes;
    })
  }

}