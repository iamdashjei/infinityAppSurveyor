import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RequestOptions } from '@angular/http';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getOtpCodes(){
    return new Promise(resolve => {
      this.http.get('http://app.infinityenergyorganisation.co.uk/app/api/get-otpcodes').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });

  }

  createOtpCodes() {
      let headers= new HttpHeaders();

     headers.append('Content-type','application/json');
      let postData = {
              "name": "Customer004",
              "email": "customer004@email.com",
              "tel": "0000252525"
      }


      return new Promise(resolve => {
      this.http.post('http://app.infinityenergyorganisation.co.uk/app/api/add-otpcodes',JSON.stringify(postData) , {headers: headers}).subscribe(res => {
        resolve(res);

      }, (err) => {
       console.log(err);
      });
    });
  }


  


}
