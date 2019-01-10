import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'phonePipe'})
export class PhonePipe implements PipeTransform {
    transform(value : string) : string {
        var formatted = value.substr(0, 3) + '-' + value.substr(3, 3) + '-' + value.substr(6,4);
        return formatted;
    }
}