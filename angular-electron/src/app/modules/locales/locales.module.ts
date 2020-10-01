import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncludesModule } from "../includes/includes.module";

import { LocalesRoutingModule } from './locales-routing.module';
import { LocaleListComponent } from './locale-list/locale-list.component';
import { LocaleFormComponent } from './locale-form/locale-form.component';

import { NgbAlertModule, NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [LocaleListComponent, LocaleFormComponent],
  imports: [
    CommonModule,
    LocalesRoutingModule,
    FormsModule,
    IncludesModule,
    NgbAlertModule,
    NgbDatepickerModule
  ],
  exports: [

  ]
})
export class LocalesModule { }
