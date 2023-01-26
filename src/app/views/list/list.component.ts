import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemons:any =[];
  offset: number = 0;
  limit:number = 3;



  constructor(
    private pokeapi: PokeapiService
  ) {}

    returnHomeScreen():void {
      this.pokeapi.getPokeDetails(this.offset, this.limit);
    }

  ngOnInit(): void {
  }



}



