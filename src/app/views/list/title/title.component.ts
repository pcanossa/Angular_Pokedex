import { Component, OnInit } from '@angular/core';

//Services
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  offset: number = 0;
  limit:number = 3;

  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit(): void {
  }

  //Retorno da lsitagem de Pokemons ao clicar no título
  returnHomeScreen():void {
    for (let i = 0; i <= (this.pokeapi.pokemons.length+1); i++) {
      this.pokeapi.pokemons.pop();
    }
    this.pokeapi.getPokeDetails(this.offset, this.limit);
  }

}
