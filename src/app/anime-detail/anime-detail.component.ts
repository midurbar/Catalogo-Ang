import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

  animeForm = this.fb.group({
    nombre: [null, Validators.required],
    ep: null,
    tipo: null,
    descrp: null
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}