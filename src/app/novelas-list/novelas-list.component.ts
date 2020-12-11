import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-novelas-list',
  templateUrl: './novelas-list.component.html',
  styleUrls: ['./novelas-list.component.css']
})
export class NovelasListComponent implements OnInit {

  novelas= [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>("http://localhost:3000/api/novelas")
    .subscribe(novelas => {
      this.novelas = novelas;
    })
  }

}