import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocaleFormComponent } from "./locale-form/locale-form.component";
import { LocaleListComponent } from "./locale-list/locale-list.component";

const routes: Routes = [
  { path: 'locales', component: LocaleListComponent },
  { path: 'locales/create', component: LocaleFormComponent },
  { path: 'locales/:id/edit', component: LocaleFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalesRoutingModule { }
