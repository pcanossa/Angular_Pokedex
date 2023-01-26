import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.id = this.pokeApi['order']
    console.log(this.id)
    this.pokemon.pop();
    this.pokeApi.getPokeBigCard(this.id);
    this.pokemon = this.pokeApi.pokeBigCard
    this.habilities = this.pokeApi.pokeHabilitys
   console.log(this.pokemon)
  }
  ngOnInit(): void {
  }

}
