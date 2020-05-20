import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalesRoutingModule } from './locales-routing.module';
import { LocaleListComponent } from './locale-list/locale-list.component';
import { LocaleFormComponent } from './locale-form/locale-form.component';


@NgModule({
  declarations: [LocaleListComponent, LocaleFormComponent],
  imports: [
    CommonModule,
    LocalesRoutingModule
  ]
})
export class LocalesModule { }
