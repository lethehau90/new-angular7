import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'genderPipe' })
export class GenderPipe implements PipeTransform  {

  constructor(){
  }

  transform(value: boolean): string {
    var result = "";
    result = value ? "Nam" : "Nữ";
    return result;
  }
}