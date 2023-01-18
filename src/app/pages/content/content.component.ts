import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  searchText:string = 'https://pokeapi.co/api/v2/pokemon/1';
  types: any[] = [];
  contador: any[] = [];
  pokemons: any[] = [];
  test: any;
  offset:number = 1;
  limit:number = 5;


  constructor(
    private http:HttpClient,
    private getPoke:PokeapiService,
  ) {
    this.pokemons = this.getPoke.getPokeDetails(0,3)
      console.log(this.pokemons)
    }


  makeContador (indexNumber:number): void {
    for (let i:number = 1; i < indexNumber; i++) {
      this.contador.push(i);

    }
  }

  ngOnInit(): void {
  }
}




