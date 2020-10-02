import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedevableFormComponent } from "./redevable-form/redevable-form.component";
import { RedevableListComponent } from "./redevable-list/redevable-list.component";

const routes: Routes = [
  { path: 'redevables', component: RedevableListComponent },
  { path: 'redevables/create', component: RedevableFormComponent },
  { path: 'redevables/:id/edit', component: RedevableFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedevablesRoutingModule { }
