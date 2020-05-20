import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuartierListComponent} from "./modules/quartiers/quartier-list/quartier-list.component";


const routes: Routes = [
  { path: '', redirectTo: '/quartiers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
