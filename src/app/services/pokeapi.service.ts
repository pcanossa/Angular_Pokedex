import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpClientJsonpModule, HttpParams } from '@angular/common/http';
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
      console.log(`qntdade service ${this.qntdadePokes}`)
      this.allPokes = this.total - this.qntdadePokes
    return this.pokemons
  }

  getPokeBId(id:string){
    this.http.get (this.url+id)
      .subscribe ({
        next: (response:any) => {
          this.pokemons.push(response)
          this.total = this.pokemons.length
          this.allPokes = this.total
          console.log(this.allPokes)
        },
        error: (err:any) => console.log(err.message)
      })

  }


  getPokeBigCard (id:any): any {
    this.pokeBigCard.pop()
    for (let i = 0; i <= (this.pokeHabilitys.length+1); i++) {
      this.pokeHabilitys.pop()
    }
    this.http.get (this.url+id)
        .subscribe ({
          next: (response:any) => {
            this.pokeBigCard.push(response)
            console.log(this.pokeBigCard);
            for (let i = 0; i < 3; i++) {
              this.pokeHabilitys.push(response.moves[i].move.name)
            }
          },
          error: (err:any) => console.log(err.message)
        })
    return this.pokeBigCard
  }





  handleError(error:HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
  } else {
    errorMessage = `Código de Erro (servidor): ${error.status}, mensagem: ${error.message}`;
  }



  return throwError(errorMessage);
}

}
