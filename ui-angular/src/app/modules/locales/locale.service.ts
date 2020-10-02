import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from "../../utilities/constants.service";
import { Response } from "../../utilities/response.model";
import { Pageable } from "../../utilities/pageable.model";
import { Observable } from "rxjs";

import { Locale } from "./locale.model";
import { Quartier } from "../quartiers/quartier.model";
import { QuartierService } from "../quartiers/quartier.service";
import { Rue } from "../rues/rue.model";
import { RueService } from "../rues/rue.service";
import { Redevable } from "../redevables/redevable.model";
import { RedevableService } from "../redevables/redevable.service";
import { Categorie } from "../categories/categorie.model";
import { CategorieService } from "../categories/categorie.service";


@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private _baseUrl: string = '/api/locales';
  private _locale: Locale;
  private _list: Array<Locale>;

  private _listQuartier: Array<Quartier>;
  private _listRue: Array<Rue>;
  private _listRedevable: Array<Redevable>;
  private _listCategorie: Array<Categorie>;

  private _pageable: Pageable = new Pageable();
  private _isLoading: boolean = false;
  private _errorMessage: string = '';

  constructor(private router: Router,
    private http: HttpClient,
    private constantes: ConstantsService,
    private quartierService: QuartierService,
    private redevableService: RedevableService,
    private rueService: RueService,
    private categorieService: CategorieService) {
    this.baseUrl = this.constantes.domain.concat(this.baseUrl);
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  set baseUrl(value: string) {
    this._baseUrl = value;
  }

  get locale(): Locale {
    return this._locale;
  }

  set locale(value: Locale) {
    this._locale = value;
  }

  get list(): Array<Locale> {
    return this._list;
  }

  set list(value: Array<Locale>) {
    this._list = value;
  }

  get pageable(): Pageable {
    return this._pageable;
  }

  set pageable(value: Pageable) {
    this._pageable = value;
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

  get listQuartier(): Array<Quartier> {
    return this._listQuartier;
  }

  set listQuartier(value: Array<Quartier>) {
    this._listQuartier = value;
  }

  get listRue(): Array<Rue> {
    return this._listRue;
  }

  set listRue(value: Array<Rue>) {
    this._listRue = value;
  }

  get listCategorie(): Array<Categorie> {
    return this._listCategorie;
  }

  set listCategorie(value: Array<Categorie>) {
    this._listCategorie = value;
  }

  get listRedevable(): Array<Redevable> {
    return this._listRedevable;
  }

  set listRedevable(value: Array<Redevable>) {
    this._listRedevable = value;
  }

  public init() {
    this.locale = new Locale();
  }

  public findAll() {
    this.isLoading = true;
    this.http.get<Response>(this._baseUrl + '/?' + this.pageable.uri).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.pageable.collectionSize = data.data['totalElements']
        this.list = <Array<Locale>>data.data['content'];
      }
      else {
        console.log(data.message.concat(" -- Details : ", data.details))
      }
    });
  }

  public findById(id: string) {
    return new Promise((resolve, reject) => {
      this.isLoading = true;
      this.http.get<Response>(this._baseUrl + '/' + id).subscribe(data => {
        this.isLoading = false;
        if (data.success) {
          this.locale = <Locale>data.data;
          this.rueForSelect(this.locale.rue.quartier.id);
          resolve('succes');
        }
      }, error => {
        this.isLoading = false;
        this.errorMessage = error.error.message;
        console.log(error.error.details);
        error('error');
      });
    });
  }

  public save() {
    this.isLoading = true;
    this.errorMessage = '';
    this.http.post<Response>(this._baseUrl + '/', this.locale).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.router.navigate(['/locales']);
      }
      else {
        this.errorMessage = data.message;
        console.log(data.details);
      }
    }, error => {
      this.isLoading = false;
      this.errorMessage = error.error.message;
      console.log(error.error.details);
    });
  }

  public update() {
    this.isLoading = true;
    this.errorMessage = '';
    this.http.put<Response>(this._baseUrl + '/', this.locale).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.router.navigate(['/locales']);
      }
      else {
        this.errorMessage = data.message;
        console.log(data.details);
      }
    }, error => {
      this.isLoading = false;
      this.errorMessage = error.error.message;
      console.log(error.error.details);
    });
  }

  public delete(id) {
    this.isLoading = true;
    this.http.delete<Response>(this._baseUrl + '/' + id).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.findAll();
      }
      else {
        this.errorMessage = data.message;
        console.log(data.details);
      }
    }, error => {
      this.isLoading = false;
      this.errorMessage = error.error.message;
      console.log(error.error.details);
    });
  }

  public quartierForSelect() {
    this.isLoading = true;
    this.quartierService.dataForSelect().subscribe(data => {
      this.isLoading = false;
      this.listQuartier = <Array<Quartier>>data['value'];
    });
  }

  public categorieForSelect() {
    this.isLoading = true;
    this.categorieService.dataForSelect().subscribe(data => {
      this.isLoading = false;
      this.listCategorie = <Array<Categorie>>data['value'];
    });
  }

  public redevableForSelect() {
    this.isLoading = true;
    this.redevableService.dataForSelect().subscribe(data => {
      this.isLoading = false;
      this.listRedevable = <Array<Redevable>>data['value'];
    });
  }

  public rueForSelect(quartierId) {
    this.isLoading = true;
    this.rueService.dataForSelect(quartierId).subscribe(data => {
      this.isLoading = false;
      this.listRue = <Array<Rue>>data['value'];
    });
  }

  public dataForTaxe(search: string) {
    return new Observable((observer) => {
      this.http.get<Response>(this._baseUrl + '/' + search + '/ice-cin').subscribe(data => {
        observer.next(data.data);
      });
    });
  }
}
