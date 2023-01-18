import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpClientJsonpModule, HttpParams } from '@angular/common/http';
import { throwError, lastValueFrom, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


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


  term:string = '';
  private url:string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http:HttpClient,
  ) { }


  getPokeDetails(offset:number, limit:number):any {
    //this.pokemons = [''];
    this.http.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .subscribe({
        next: (response:any) => {
          this.urlPoke = response.results;
          for (let i = 0; i < this.urlPoke.length; i++) {
          this.http.get(this.urlPoke[i].url)
          .subscribe ({
          next: (response:any) => {
            this.pokemons.push(response)
            console.log(this.pokemons)
          },
          error: (err) => console.log(err.message)
          })
          }
        },
        error: (err) => console.log(err)
      })
    return this.pokemons
  }

  getPokeBId(id:string){
    this.http.get (this.url+id)
      .subscribe ({
        next: (response:any) => this.pokemons.push(response),
        error: (err:any) => console.log(err.message)
      })

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
