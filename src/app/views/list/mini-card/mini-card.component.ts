import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Inject }  from '@angular/core';


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
  allPokes:number = 0;
  qntadePokeMarcador:number = 0;
  order:any;
  i:any;
  id:any;

  constructor(
    private http:HttpClient,
    private getPoke:PokeapiService,
    @Inject(DOCUMENT) document: Document
  ) {
    this.getPoke.getPokeDetails(this.offset, this.limit);
    this.pokeTest = this.getPoke['pokemons'];
    this.allPokes = this.getPoke['allPokes'];
   }






  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.allPokes = this.getPoke.allPokes;
  }

  nextPokemon() {
    if (this.allPokes > 3 && this.allPokes <= this.getPoke.total) {
      this.offset += 3
      for (let i = 0; i < (this.getPoke['pokemons'].length+2); i++) {
        this.getPoke['pokemons'].pop();
      }
      this.getPoke.getPokeDetails(this.offset, this.limit);
      this.allPokes = this.getPoke.allPokes
      console.log(`total pokes service ${this.allPokes}`)
    }

  }

  backPokemon() {
      if (this.allPokes > 0 && this.allPokes < 1279) {
      this.offset -= 3
      for (let i = 0; i < (this.getPoke['pokemons'].length+2); i++) {
        this.getPoke['pokemons'].pop();
      }
      this.getPoke.getPokeDetails(this.offset, this.limit);
      this.allPokes += 3
      this.qntadePokeMarcador = 3
      this.qntadePokeMarcador = this.getPoke.qntdadePokes - 6
      this.getPoke.qntdadePokes = this.qntadePokeMarcador
      this.getPoke.allPokes = this.allPokes

    }

  }



  changeBackground (id:any):void {
    const hoverClasse:any = document.getElementsByClassName(id);

    for (let i = 0; i < hoverClasse.length; i++) {
      let className = hoverClasse[i];
      className.style.backgroundColor = "rgba(155, 162, 228, 1)"


    }
  }

  returnBackground (id:any):void {
    const hoverClasse:any = document.getElementsByClassName(id);

    for (let i = 0; i < hoverClasse.length; i++) {
      let className = hoverClasse[i];
      className.style.backgroundColor = "rgb(213,215,230)"

    }
  }

  returnOrder (i:any):void {
    this.getPoke.order = 0;
    this.id = i;
    console.log(this.id);
    console.log(this.getPoke.pokemons)
    this.getPoke.order = this.getPoke.pokemons[this.id].id;

    console.log(this.getPoke.order)
    this.getPoke.getPokeBigCard(this.getPoke.order)
  }
}

function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

