import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageableListComponent } from './pageable-list/pageable-list.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PageableListComponent],
  exports: [
    PageableListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule
  ]
})
export class IncludesModule { }
