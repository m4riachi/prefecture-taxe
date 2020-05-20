import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    req = req.clone({
      setHeaders: {
        Authorization: 'Basic ' + btoa('user:password')
      }
    });

    return next.handle(req);
  }
}
