import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncludesModule} from "../includes/includes.module";

import { QuartiersRoutingModule } from './quartiers-routing.module';
import { QuartierListComponent } from './quartier-list/quartier-list.component';
import { QuartierFormComponent } from './quartier-form/quartier-form.component';
import {NgbAlertModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [QuartierListComponent, QuartierFormComponent],
  imports: [
    CommonModule,
    QuartiersRoutingModule,
    FormsModule,
    IncludesModule,
    NgbAlertModule
  ],
  exports: [

  ]
})
export class QuartiersModule { }
