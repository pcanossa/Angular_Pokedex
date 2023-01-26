import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiniCardComponent } from './views/list/mini-card/mini-card.component';
import { BigCardComponent } from './views/pokemon/big-card/big-card.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

