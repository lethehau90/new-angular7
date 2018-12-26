import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CacheItem } from './../models/cache-item.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  public cache: CacheItem[] = [];

  constructor(
    private http: HttpClient
  ) { }

  /**
   * @param url: string
   * @param obj {params, headers}
   * params {k1:v1, k2:v2....}
   * headers {k1:v1, k2:v2....}
   * @return Callback Function
   */
  doGet(url: string, obj?: any, hideLoading: boolean = false, isCache: boolean = false): Observable<any> {
    const cachedItem: CacheItem = this.getCachedItem(url);
    if (cachedItem !== undefined && isCache) {
      return of(cachedItem.data);
    }
    return this.request('GET', url, obj, null, hideLoading, isCache);
  }

  doPostWithFile(url: string, postData: any, obj?: any, hideLoading: boolean = false): Observable<any> {
    const formData = this.getModelAsFormData(postData);
    if (obj && typeof obj.headers !== 'undefined') {
      delete obj.headers['Content-Type'];
    }

    return this.doPost(url, formData, obj, hideLoading)
      .pipe(
        map(res => this.extractData(res, url, 'POST')),
        catchError(this.handleError)
      );
  }

  private getModelAsFormData(data: any) {
    const dataAsFormData = new FormData();
    // create instance vars to store keys and final output
    const keyArr: any[] = Object.keys(data);
    // loop through the object,
    // pushing values to the return array
    keyArr.forEach((key: any) => {
      dataAsFormData.append(key, data[key]);
    });
    return dataAsFormData;
  }

  /**
   * @param url: string
   * @param data: body data
   * @param obj {params, headers}
   * params {k1:v1, k2:v2....}
   * headers {k1:v1, k2:v2....}
   * @return Callback Function
   */
  doPost(
    url: string,
    data?: any,
    obj?: any,
    hideLoading: boolean = false
  ): Observable<any> {
    return this.request('POST', url, obj, data, hideLoading);
  }

  /**
   * @param url: string
   * @param data: body data
   * @param obj {params, headers}
   * params {k1:v1, k2:v2....}
   * headers {k1:v1, k2:v2....}
   * @return Callback Function
   */
  doPut(
    url: string,
    data?: any,
    obj?: any,
    hideLoading: boolean = false
  ): Observable<any> {
    return this.request('PUT', url, obj, data, hideLoading);
  }

  /**
   * @param url: string
   * @param obj {params, headers}
   * params {k1:v1, k2:v2....}
   * headers {k1:v1, k2:v2....}
   * @return Callback Function
   */
  doDelete(
    url: string,
    obj?: any,
    hideLoading: boolean = false
  ): Observable<any> {
    return this.request('DELETE', url, obj, hideLoading);
  }

  private request(
    requestMethod: string = 'GET',
    url: string,
    obj?: any,
    data?: any,
    hideLoading: boolean = false,
    isCache: boolean = false
  ) {
    const options: any = {};
    options.observe = 'response';
    if (obj && typeof obj.params !== 'undefined') {
      let httpParams = new HttpParams();
      Object.entries(obj.params).forEach(
        ([key, value]) => (httpParams = httpParams.append(key, String(value)))
      );
      options.params = httpParams;
    }

    if (obj && typeof obj.headers !== 'undefined') {
      options.headers = this.createHeders(obj.headers, hideLoading);
    } else {
      let header = new HttpHeaders();
      if (hideLoading) {
        header = header.set('hideLoading', 'true');
      }
      options.headers = header;
    }

    // DO NOT CHECK Object.keys(data).length > 0 HERE
    // BECAUSE WHEN DATA created by type FormData,
    // Object.keys(data).length ALWAYS == 0
    // REF: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    if (data) {
      options.body = data;
    }

    if (obj && obj.responseType) {
      options.responseType = obj.responseType;
    }
    return this.http.request(requestMethod, url, options).pipe(
      map(res => this.extractData(res, url, requestMethod, isCache)),
      catchError(this.handleError)
    );
  }

  /**
   * @param Object headers : headers {k1:v1, k2:v2....}
   */
  private createHeders(headers, hideLoading) {
    let header = new HttpHeaders(); // { 'Content-Type': 'application/json' }
    Object.entries(headers).forEach(([key, value]) => {
      header = header.append(key, String(value));
    });
    if (hideLoading) {
      header = header.set('hideLoading', 'true');
    }
    return header;
  }

  private extractData(res: any, url: string = '', requestMethod: string = 'GET', isCache: boolean = false) {
    let result = null;
    try {
      if (
        typeof res.constructor !== 'undefined' &&
        res.constructor.name === 'HttpResponse'
      ) {
        result = res.body;
      } else {
        result = res;
      }
    } catch (e) {
      result = res._body;
    }

    if (requestMethod === 'GET' && isCache) {
      this.cacheData(url, result);
    }

    return result;
  }

  private cacheData(url: string = '', data: any = null) {
    let cachedItem: CacheItem = this.getCachedItem(url);
    if (!cachedItem) {
      cachedItem = new CacheItem();
      cachedItem.url = url;
      this.cache.push(cachedItem);
    }
    cachedItem.data = data;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = '';
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return throwError(errMsg);
  }

  private getCachedItem(url: string): CacheItem {
    return this.cache.find(item => item.url === url);
  }
}
