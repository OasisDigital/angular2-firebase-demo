// Angular 2 Toolkit - Seconds to Date Pipe
// Copyright 2015 Oasis Digital - http://oasisdigital.com
//     written by Kyle Cordes - http://kylecordes.com

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'secondsToDate'
})
export class SecondsToDatePipe implements PipeTransform {
  transform(input: any, args: any[] = []) {
    if(input) {
      return new Date(input * 1000);
    }
  }
}
