import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  private apiUrl = 'http://devcrm.infinityenergyorganisation.co.uk/fetch-data/surveyor';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  
  // Get Leads From CRM assigned
  getLeads(): Observable<{}> {
  return this.http.get(this.apiUrl).pipe(
    map(this.extractData),
    catchError(this.handleError)
  );
  }

  // Extract Data From CRM
  private extractData(res: Response) {
  let body = res;
  return body || { };
  }

  // Hanlde Error if no data found
  private handleError (error: Response | any) {
  let errMsg: string;
  if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
  }
}
