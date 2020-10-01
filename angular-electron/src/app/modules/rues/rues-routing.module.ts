import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RueListComponent} from "./rue-list/rue-list.component";
import {RueFormComponent} from "./rue-form/rue-form.component";


const routes: Routes = [
  { path: 'rues', component: RueListComponent },
  { path: 'rues/create', component: RueFormComponent },
  { path: 'rues/:id/edit', component: RueFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuesRoutingModule { }
