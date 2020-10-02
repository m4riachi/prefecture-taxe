import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncludesModule } from "../includes/includes.module";

import { RedevablesRoutingModule } from './redevables-routing.module';
import { RedevableListComponent } from './redevable-list/redevable-list.component';
import { RedevableFormComponent } from './redevable-form/redevable-form.component';

import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [RedevableListComponent, RedevableFormComponent],
  imports: [
    CommonModule,
    RedevablesRoutingModule,
    FormsModule,
    IncludesModule,
    NgbAlertModule
  ],
  exports: [

  ]
})
export class RedevablesModule { }
