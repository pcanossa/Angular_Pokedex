import { Component, OnInit } from '@angular/core';

//Services
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  pokemon:any[] = [];
  id:any;
  habilities:any[] = [];

  constructor(
    private pokeApi: PokeapiService,
  ) {
    this.id = this.pokeApi['order']
    this.pokemon.pop();
    this.pokeApi.getPokeBigCard(this.id);
    this.pokemon = this.pokeApi.pokeBigCard
    this.habilities = this.pokeApi.pokeHabilitys
  }
  ngOnInit(): void {
  }

}
