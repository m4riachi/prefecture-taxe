import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuesRoutingModule } from './rues-routing.module';
import { RueListComponent } from './rue-list/rue-list.component';
import { RueFormComponent } from './rue-form/rue-form.component';
import {IncludesModule} from "../includes/includes.module";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [RueListComponent, RueFormComponent],
  imports: [
    CommonModule,
    RuesRoutingModule,
    IncludesModule,
    FormsModule,
    NgbModule
  ]
})
export class RuesModule { }
