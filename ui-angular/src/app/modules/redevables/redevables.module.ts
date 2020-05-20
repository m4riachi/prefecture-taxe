import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RedevablesRoutingModule } from './redevables-routing.module';
import { RedevableListComponent } from './redevable-list/redevable-list.component';
import { RedevableFormComponent } from './redevable-form/redevable-form.component';


@NgModule({
  declarations: [RedevableListComponent, RedevableFormComponent],
  imports: [
    CommonModule,
    RedevablesRoutingModule
  ]
})
export class RedevablesModule { }
