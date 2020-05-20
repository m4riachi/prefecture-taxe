import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpIntercepterBasicAuthService} from "./utilities/http-intercepter-basic-auth.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { QuartiersModule } from './modules/quartiers/quartiers.module';
import { IncludesModule } from "./modules/includes/includes.module";
import { RuesModule } from './modules/rues/rues.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { RedevablesModule } from './modules/redevables/redevables.module';
import { LocalesModule } from './modules/locales/locales.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    QuartiersModule,
    IncludesModule,
    RuesModule,
    CategoriesModule,
    RedevablesModule,
    LocalesModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
