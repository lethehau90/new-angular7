import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {
  constructor() {}

  setObjData(key: string, data: any) {
    sessionStorage.setItem(key, data == null ? '' : JSON.stringify(data));
  }

  getObjData(key: string) {
    const strData = sessionStorage.getItem(key);
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
    sessionStorage.setItem(key, data == null ? '' : data);
  }

  getData(key: string) {
    return sessionStorage.getItem(key);
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }
}
