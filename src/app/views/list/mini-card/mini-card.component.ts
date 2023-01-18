import { Component, OnInit, Input, NgModule, Injectable } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { empty, scheduled } from 'rxjs';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.css']
})
export class MiniCardComponent implements OnInit {

  pokemons: any[] = [];
  offset: number = 0;
  limit:number = 3;
  pokeTest:any[] = [];



  constructor(
    private http:HttpClient,
    private getPoke:PokeapiService,
  ) {
    this.getPoke.getPokeDetails(this.offset, this.limit);
    this.pokeTest = this.getPoke['pokemons'];
   }






  ngOnInit(): void {

  }

  ngOnChanges(): void {
  }

  nextPokemon() {
    if (this.offset >= 0 && this.offset <= 1279) {
      this.offset += 3
      for (let i = 0; i < (this.getPoke['pokemons'].length+2); i++) {
        this.getPoke['pokemons'].pop();
      }
      console.log(this.pokemons)
      this.pokemons = this.getPoke.getPokeDetails(this.offset, this.limit);
      console.log(this.pokemons)
    }

  }

  backPokemon() {
      if (this.offset > 0 && this.offset < 1279) {
      this.offset -= 3
      for (let i = 0; i < (this.getPoke['pokemons'].length+2); i++) {
        this.getPoke['pokemons'].pop();
      }
      console.log(this.pokemons)
      this.pokemons = this.getPoke.getPokeDetails(this.offset, this.limit);
      console.log(this.pokemons)
    }

  }



  changeBackground ():void {
    const hoverClasse:any = document.getElementsByClassName("fund");

    for (let i = 0; i < hoverClasse.length; i++) {
      let className = hoverClasse[i];
      className.style.backgroundColor = "rgba(155, 162, 228, 1)"


    }
  }

  returnBackground ():void {
    const hoverClasse:any = document.getElementsByClassName("fund");

    for (let i = 0; i < hoverClasse.length; i++) {
      let className = hoverClasse[i];
      className.style.backgroundColor = "rgb(213,215,230)"

    }
  }
}

function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

