import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieListComponent } from "./categorie-list/categorie-list.component";
import { CategorieFormComponent } from "./categorie-form/categorie-form.component";


const routes: Routes = [
  { path: 'categories', component: CategorieListComponent },
  { path: 'categories/create', component: CategorieFormComponent },
  { path: 'categories/:id/edit', component: CategorieListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
