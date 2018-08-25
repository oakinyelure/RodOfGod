
import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})

export class DateHelper {

    constructor() {
    }
    
    fromNow(date: Date): string {
        return moment(date).fromNow();
    }

}