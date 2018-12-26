import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  setObjData(key: string, data: any) {
    localStorage.setItem(key, data == null ? '' : JSON.stringify(data));
  }

  getObjData(key: string) {
    const strData = localStorage.getItem(key);
    if (strData == null || strData === '') {
      return null;
    }
    return JSON.parse(strData);
  }

  addItemToArrData(key: string, item: any) {
    let data = this.getObjData(key);
    if (data == null) {
      data = [];
    }
    data.push(item);
    this.setObjData(key, data);
  }

  updateItemToArrData(key: string, item: any, index: number) {
    let data = this.getObjData(key);
    if (data == null) {
      data = [];
    }
    data[index] = item;
    this.setObjData(key, data);
  }

  concatToArrData(key: string, items: any) {
    let data = this.getObjData(key);
    if (data == null) {
      data = [];
    }
    data = data.concat(items);
    this.setObjData(key, data);
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, data == null ? '' : data);
  }

  getData(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }
  setObjDataCircular(key: string, data: any) {
    const cache = [];
    const result = JSON.stringify(data, function(k, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          try {
            return JSON.parse(JSON.stringify(value));
          } catch (error) {
            return;
          }
        }
        cache.push(value);
      }
      return value;
    });
    localStorage.setItem(key, data == null ? '' : result);
  }

}
