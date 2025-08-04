import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (value == undefined || value == null) {
      return '';
    }
    let finalStr = value + ' ';
    if (value == 1) {
      finalStr += 'day';
    } else if (value >= 0 && value < 30) {
      finalStr += 'days';
    } else if (value >= 30 && value < 60) {
      finalStr = '1 month';
    } else if (value >= 60 && value < 365) {
      finalStr = (value / 30).toFixed(0) + ' months';
    } else if (value < 730) {
      finalStr = '1 year';
    } else {
      finalStr = (value / 365).toFixed(0) + ' years';
    }
    return finalStr;
  }
}
