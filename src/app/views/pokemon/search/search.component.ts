import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchPokemonText:string = '';

  constructor(
    private pokeapi:PokeapiService,
  ) { }

  ngOnInit(): void {
  }

  searchPokemon(pokemon:string) {
    for (let i = 0; i < (this.pokeapi['pokemons'].length+2); i++) {
      this.pokeapi['pokemons'].pop();
    }
  this.pokeapi.getPokeBId(pokemon)
  }

}
