import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CategorieFormComponent } from './categorie-form/categorie-form.component';
import {IncludesModule} from "../includes/includes.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [CategorieListComponent, CategorieFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    IncludesModule,
    NgbModule,
    FormsModule
  ]
})
export class CategoriesModule { }
