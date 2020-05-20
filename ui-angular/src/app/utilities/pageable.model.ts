export class Pageable {
  private _search:String;
  private _collectionSize:number;
  private _page:number;
  private _pageSize:number;
  private _sort:string;
  private _direction:string;
  private _uri:String;


  constructor(search: String = '', collectionSize: number = 0, page: number = 1, pageSize: number = 25, sort: string = 'id', direction: string = 'desc') {
    this._collectionSize = collectionSize;
    this._page = page;
    this._pageSize = pageSize;
    this._sort = sort;
    this._direction = direction;
  }

  get search(): String {
    return this._search;
  }

  set search(value: String) {
    this._search = value;
  }

  get collectionSize(): number {
    return this._collectionSize;
  }

  set collectionSize(value: number) {
    this._collectionSize = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }

  get sort(): string {
    return this._sort;
  }

  set sort(value: string) {
    if (value == this._sort) {
      if (this.direction == 'desc') this.direction = 'asc';
      else this.direction = 'desc';
    }
    else this.direction = 'asc';

    this._sort = value;
  }

  get direction(): string {
    return this._direction;
  }

  set direction(value: string) {
    this._direction = value;
  }

  get uri(): String {
    return 'search=' + this.search + '&page=' + this.page + '&size=' + this.pageSize + '&page=' + this.page + '&sort=' + this.sort + ',' + this.direction;
  }
}
