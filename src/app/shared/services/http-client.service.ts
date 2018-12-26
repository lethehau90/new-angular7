import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, finalize } from 'rxjs/operators';
import { CacheItem } from './../models/cache-item.model';
import { LoadingService } from './loading.service';
import { NotifierService } from './notifier.service';
import { MESSAGE_SERVER_ERROR } from '../shared.constant';
import * as _ from 'lodash';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  baseApiUrl: string = environment.apiHost;

  constructor(
    private _httpClient: HttpClient,
    private _loadingService: LoadingService,
    private _notifierService: NotifierService
  ) { }

  get(api: string, params?: Object): Observable<any> {
    return this._httpClient.get(this.baseApiUrl + api, { params: params ? this._parseParamURL(params) : null });
  }

  put(api: string, data: any, options?: any): Observable<any> {
    return this._httpClient.put(this.baseApiUrl + api, data, options);
  }

  post(api: string, data: any, options?: any): Observable<any> {
    return this._httpClient.post(this.baseApiUrl + api, data, options);
  }

  remove(api: string, options?: any): Observable<any> {
    return this._httpClient.put(this.baseApiUrl + api, options);
  }

  delete(api: string, options?: any): Observable<any> {
    return this._httpClient.delete(this.baseApiUrl + api, options);
  }
  handleRequest(requsetFn: Observable<any>) {
    this._loadingService.showLoading();
    return requsetFn.pipe(
      tap(
        response => { },
        error => {
          this.handleError(error);
        }
      ),
      finalize(() => {
        this._loadingService.hideLoading();
      })
    );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ProgressEvent) {
      this._notifierService.showToastrErrorMessage(MESSAGE_SERVER_ERROR.NETWORK);
    } else {
      if (error.status === 404) {
        this._notifierService.showToastrErrorMessage(error.statusText);
      } else if (error.status === 500 || error.status === 503) {
        this._notifierService.showToastrErrorMessageTOP(MESSAGE_SERVER_ERROR.REFRESH, MESSAGE_SERVER_ERROR.RESPOND);
      } else {
        if (error.error.message) {
          this._notifierService.showToastrErrorMessage(error.error.message);
        } else {
          this._notifierService.showToastrErrorMessage(error.error.error.message);
        }
      }
    }
    return throwError('Something bad happened; please try again later.');
  }
  private _parseParamURL(params: Object) {
    let urlParams = new HttpParams();

    for (const prop in params) {
      if (params.hasOwnProperty(prop)) {
        if (!params[prop] || params[prop].length === 0) {
          delete params[prop];
        } else {
          if (_.isArray(params[prop])) {
            params[prop].forEach(element => {
              urlParams = urlParams.append(prop, String(element));
            });
          } else {
            urlParams = urlParams.append(prop, String(params[prop]));
          }
        }
      }
    }
    return urlParams;
  }
}
