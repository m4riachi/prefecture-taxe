import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from "../../utilities/constants.service";
import { Response } from "../../utilities/response.model";
import { Pageable } from "../../utilities/pageable.model";
import { Observable } from "rxjs";

import { Rue } from "./rue.model";
import {Quartier} from "../quartiers/quartier.model";
import {QuartierService} from "../quartiers/quartier.service";

@Injectable({
  providedIn: 'root'
})
export class RueService {
  private _baseUrl: string = '/prefecture-gestion-locale/api/rues';
  private _rue: Rue;
  private _list: Array<Rue>;
  private _listQuartier: Array<Quartier>;
  private _pageable: Pageable = new Pageable();
  private _isLoading:boolean = false;
  private _errorMessage:string = '';

  constructor(private router: Router, private http: HttpClient, private constantes: ConstantsService, private quartierService:QuartierService) {
    this.baseUrl = this.constantes.domain.concat(this.baseUrl);
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  set baseUrl(value: string) {
    this._baseUrl = value;
  }

  get rue(): Rue {
    return this._rue;
  }

  set rue(value: Rue) {
    this._rue = value;
  }

  get list(): Array<Rue> {
    return this._list;
  }

  set list(value: Array<Rue>) {
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

  public init(){
    this.rue = new Rue();
  }

  public findAll() {
    this.isLoading = true;
    this.http.get<Response>(this._baseUrl + '/?' + this.pageable.uri).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.pageable.collectionSize = data.data['totalElements']
        this.list = <Array<Rue>> data.data['content'];
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
        this.rue = <Rue> data.data;
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
    this.http.post<Response>(this._baseUrl + '/', this.rue).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.router.navigate(['/rues']);
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
    this.http.put<Response>(this._baseUrl + '/', this.rue).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.router.navigate(['/rues']);
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

  public quartierForSelect (){
    this.isLoading = true;
    this.quartierService.dataForSelect().subscribe(data => {
      this.isLoading = false;
      this.listQuartier = <Array<Quartier>> data['value'];
    });
  }
}
