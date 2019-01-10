import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { CachingService } from '../services/caching.service';
import { access_token } from '../share.constants';


@Injectable()
export class AuthAPIInterceptor implements HttpInterceptor {
  constructor(private _caching : CachingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modified = req.clone({setHeaders: {'Authorization': 'Bearer ' + this._caching.sessionStorage.get(access_token)}});
    return next.handle(modified);
  }
}