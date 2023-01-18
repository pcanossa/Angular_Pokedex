import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './views/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { MiniCardComponent } from './views/list/mini-card/mini-card.component';
import { TitleComponent } from './views/list/title/title.component';
import { SearchComponent } from './views/pokemon/search/search.component';
import { BigCardComponent } from './views/pokemon/big-card/big-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    ContentComponent,
    PokemonComponent,
    MiniCardComponent,
    SearchComponent,
    BigCardComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
