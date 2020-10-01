import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from "../../utilities/constants.service";
import { Response } from "../../utilities/response.model";
import { Pageable } from "../../utilities/pageable.model";
import { Observable } from "rxjs";

import { Categorie } from "./categorie.model";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private _baseUrl: string = '/prefecture-gestion-locale/api/categories';
  private _categorie: Categorie = new Categorie();
  private _list: Array<Categorie>;
  private _pageable: Pageable = new Pageable();
  private _isLoading:boolean = false;
  private _errorMessage:string = '';

  constructor(private router: Router, private http: HttpClient, private constantes: ConstantsService) {
    this._baseUrl = this.constantes.domain.concat(this._baseUrl);
  }

  get categorie(): Categorie {
    if (this._categorie == null) {
      this._categorie = new Categorie();
    }
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get list(): Array<Categorie> {
    return this._list;
  }

  set list(value: Array<Categorie>) {
    this._list = value;
  }

  get pageable(): Pageable {
    return this._pageable;
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

  public init(){
    this.categorie = new Categorie();
  }

  public findAll() {
    this.isLoading = true;
    this.http.get<Response>(this._baseUrl + '/?' + this.pageable.uri).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.pageable.collectionSize = data.data['totalElements']
        this.list = <Array<Categorie>> data.data['content'];
      }
      else {
        console.log(data.message.concat(" -- Details : ", data.details))
      }
    });
  }

  public findById(id: string) {
    this.isLoading = true;
    this.http.get<Response>(this._baseUrl + '/' + id).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.categorie = <Categorie> data.data;
      }
    }, error => {
      this.isLoading = false;
      this.errorMessage = error.error.message;
      console.log(error.error.details);
    });
  }

  public save() {
    this.isLoading = true;
    this.errorMessage = '';
    this.http.post<Response>(this._baseUrl + '/', this.categorie).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.router.navigate(['/categories']);
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
    this.http.put<Response>(this._baseUrl + '/', this.categorie).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.router.navigate(['/categories']);
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

  public dataForSelect (){
    return new Observable((observer) => {
      this.http.get<Response>(this._baseUrl + '/data-for-select').subscribe(data => {
        observer.next(data.data);
      });
    });
  }
}
