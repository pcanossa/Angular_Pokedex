import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  pokemon$: Observable<any> | undefined ;
  index: number = 3;
  urlPoke:any;
  pokemons: any[] = [];
  offset: number = 0;
  limit: number = 3;
  total:number = 1279;
  allPokes:number = 0;
  qntdadePokes:number = 0;
  order:number = 1;
  pokeBigCard:any[] = []
  pokeHabilitys: any[] = []

  term:string = '';
  private url:string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http:HttpClient,
  ) {
   }

  //Retorno do Objeto com os dados dos Pokemons
  getPokeDetails(offset:number, limit:number):any {
    this.total = 1279;
    this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .subscribe({
        next: (response:any) => {
          this.urlPoke = response.results;
          for (let i = 0; i < this.urlPoke.length; i++) {
          this.http.get(this.urlPoke[i].url)
          .subscribe ({
          next: (response:any) => {
            this.pokemons.push(response)
            this.qntdadePokes += 1;
          },
          error: (err) => console.log(err.message)
          })
          }
        },
        error: (err) => console.log(err)
      })
      this.allPokes = this.total - this.qntdadePokes
    return this.pokemons
  }

  //Retorno de objetoo com dados de um únicoo Pokemon
  getPokeBId(id:string){
    this.http.get (this.url+id)
      .subscribe ({
        next: (response:any) => {
          this.pokemons.push(response)
          this.total = this.pokemons.length
          this.allPokes = this.total
        },
        error: (err:any) => console.log(err.message)
      })

  }

  //Retorno de objeto de um único Pokemón, para apresentação de dados no BigCard
  getPokeBigCard (id:any): any {
    this.pokeBigCard.pop()
    for (let i = 0; i <= (this.pokeHabilitys.length+1); i++) {
      this.pokeHabilitys.pop()
    }
    this.http.get (this.url+id)
        .subscribe ({
          next: (response:any) => {
            this.pokeBigCard.push(response)
            for (let i = 0; i < 3; i++) {
              this.pokeHabilitys.push(response.moves[i].move.name)
            }
          },
          error: (err:any) => console.log(err.message)
        })
    return this.pokeBigCard
  }

}
