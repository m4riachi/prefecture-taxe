import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { BoissonsRoutingModule } from './boissons-routing.module';
import { LocaleComponent } from './locale/locale.component';


@NgModule({
  declarations: [LocaleComponent],
  imports: [
    CommonModule,
    BoissonsRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class BoissonsModule { }
