import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manga-detail',
  templateUrl: './manga-detail.component.html',
  styleUrls: ['./manga-detail.component.css']
})
export class MangaDetailComponent implements OnInit {

  mangaForm = this.fb.group({
    nombre: [null, Validators.required],
    vol: null,
    tipo: null,
    descrp: null
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}