import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from "../../utilities/constants.service";
import { Response } from "../../utilities/response.model";
import { Pageable } from "../../utilities/pageable.model";
import { Observable } from "rxjs";

import { Redevable } from "./redevable.model";

@Injectable({
  providedIn: 'root'
})
export class RedevableService {
  private _baseUrl: string = '/prefecture-gestion-locale/api/redevables';
  private _redevable: Redevable = new Redevable();
  private _list: Array<Redevable>;
  private _pageable: Pageable = new Pageable();
  private _isLoading: boolean = false;
  private _errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient, private constantes: ConstantsService) {
    this._baseUrl = this.constantes.domain.concat(this._baseUrl);
  }

  get redevable(): Redevable {
    if (this._redevable == null) {
      this._redevable = new Redevable();
    }

    return this._redevable;
  }

  set redevable(value: Redevable) {
    this._redevable = value;
  }

  get list(): Array<Redevable> {
    return this._list;
  }

  set list(value: Array<Redevable>) {
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

  public init() {
    this.redevable = new Redevable();
  }

  public findAll() {
    this.isLoading = true;
    this.http.get<Response>(this._baseUrl + '/?' + this.pageable.uri).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.pageable.collectionSize = data.data['totalElements']
        this.list = <Array<Redevable>>data.data['content'];
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
        this.redevable = <Redevable>data.data;
      }
    }, error => {
      this.router.navigate(['/redevables']);
    });
  }

  public save() {
    this.isLoading = true;
    this.errorMessage = '';
    this.http.post<Response>(this._baseUrl + '/', this.redevable).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.router.navigate(['/redevables']);
      }
      else {
        this.errorMessage = data.message;
        console.log(data.details);
      }
    }, error => {
      this.router.navigate(['/redevables']);
    });
  }

  public update() {
    this.isLoading = true;
    this.errorMessage = '';
    this.http.put<Response>(this._baseUrl + '/', this.redevable).subscribe(data => {
      this.isLoading = false;
      if (data.success) {
        this.router.navigate(['/redevables']);
      }
      else {
        this.errorMessage = data.message;
        console.log(data.details);
      }
    }, error => {
      this.router.navigate(['/redevables']);
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
      this.router.navigate(['/redevables']);
    });
  }

  public dataForSelect() {
    return new Observable((observer) => {
      this.http.get<Response>(this._baseUrl + '/data-for-select').subscribe(data => {
        observer.next(data.data);
      });
    });
  }
}
