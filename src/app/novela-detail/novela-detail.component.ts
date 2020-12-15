import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-novela-detail',
  templateUrl: './novela-detail.component.html',
  styleUrls: ['./novela-detail.component.css']
})
export class NovelaDetailComponent implements OnInit {

  novelaForm = this.fb.group({
    nombre: [null, Validators.required],
    vol: null,
    tipo: null,
    descrp: null
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}