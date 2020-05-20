import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuartierFormComponent} from "./quartier-form/quartier-form.component";
import {QuartierListComponent} from "./quartier-list/quartier-list.component";

const routes: Routes = [
  { path: 'quartiers', component: QuartierListComponent },
  { path: 'quartiers/create', component: QuartierFormComponent },
  { path: 'quartiers/:id/edit', component: QuartierFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuartiersRoutingModule { }
