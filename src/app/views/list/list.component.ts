import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemons:any =[];



  constructor(
    private pokeapi: PokeapiService
  ) {}



  ngOnInit(): void {
  }



}



