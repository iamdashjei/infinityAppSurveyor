import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }

  getOtpCodes(){
    return new Promise(resolve => {
      this.http.get('http://app.infinityenergyorganisation.co.uk/v1/app/api/get-otpcodes').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }

  createOtpCodes() {
    let headers = new Headers(
    {
      'Content-Type' : 'application/json'
    });

    let data = JSON.stringify({
      otp_code: '3465465465',
      otp_date: '2018-08-01',
      otp_user_id: '1'
    });
    let options = new RequestOptions({ headers: headers });


    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/add-otpcodes', data, options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response : ', response.json());
        resolve(response.json());
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }





}
