import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  private _domain: string = "http://localhost:8000";
  private _itemPerPage = [25, 50, 100];

  constructor() { }

  get itemPerPage(): number[] {
    return this._itemPerPage;
  }

  get domain(): string {
    return this._domain;
  }
}
