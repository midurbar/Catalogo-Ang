import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-novelas-list',
  templateUrl: './novelas-list.component.html',
  styleUrls: ['./novelas-list.component.css']
})
export class NovelasListComponent implements OnInit {

  novelas= [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(environment.apiBaseUrl + "novelas")
    .subscribe(novelas => {
      this.novelas = novelas;
    })
  }

}