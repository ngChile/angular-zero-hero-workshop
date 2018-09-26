import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
})
export class PersonajeComponent implements OnInit {
  @Input()
  datos;

  constructor() {}

  ngOnInit() {
    console.log(this.datos);
  }
}
