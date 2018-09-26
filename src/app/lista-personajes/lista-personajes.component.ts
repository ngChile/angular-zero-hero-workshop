import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  public personajes = [];

  constructor(
    public api: ApiService
  ) {
    this.api.getCharacters().subscribe((personajes:any) => {
      this.personajes = personajes.results;
    });
  }

  ngOnInit() {
  }

}
