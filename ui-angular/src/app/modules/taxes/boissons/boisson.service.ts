import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from "../../../utilities/constants.service";
import { Response } from "../../../utilities/response.model";
import { Locale } from "../../locales/locale.model";
import { LocaleService } from "../../locales/locale.service";

@Injectable({
  providedIn: 'root'
})
export class BoissonService {
  private _baseUrl: string = '/api/';
  private _isLoading: boolean = false;
  private _errorMessage: string = '';
  private _listLocale: Array<Locale>;
  private _search: string = '';

  constructor(private router: Router, private http: HttpClient, private constantes: ConstantsService, private localeService: LocaleService) {
    this.baseUrl = this.constantes.domain.concat(this.baseUrl);
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  set baseUrl(value: string) {
    this._baseUrl = value;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  set errorMessage(value: string) {
    this._errorMessage = value;
  }

  get listLocale(): Array<Locale> {
    return this._listLocale;
  }

  set listLocale(value: Array<Locale>) {
    this._listLocale = value;
  }

  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
  }

  public findLocale() {
    this.isLoading = true;
    this.localeService.dataForTaxe(this.search).subscribe(data => {
      this.isLoading = false;
      this.listLocale = <Array<Locale>>data['value'];
    });
  }
}
