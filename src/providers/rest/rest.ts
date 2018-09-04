import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Storage } from '@ionic/storage';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  public keyVal: any;
  public headers = new Headers(
  {
    'Content-Type' : 'application/json'
  });

  public options = new RequestOptions({ headers: this.headers });
  constructor(public http: Http, private storage: Storage) {
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
    let data = JSON.stringify({
      otp_code: '3465465465',
      otp_date: '2018-08-01',
      otp_user_id: '1'
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/add-otpcodes', data, this.options)
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

  fetchLeadAssigned(id){
    let data = JSON.stringify({
      otp_user_id: id
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/get-userByLead', data, this.options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response for Lead Assigned: ', response.json());
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

  fetchUserByPhoneNumber(phoneNumber){
    let request_headers = new Headers(
    {
      'Content-Type' : 'application/json'
    });

    let request_options = new RequestOptions({ headers: request_headers });
    let data = JSON.stringify({
      phone: phoneNumber
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/get-userByPhoneNumber', data, request_options)
      .toPromise()
      .then((response) =>
      {
        //console.log('API Response : ', response.json());
        resolve(response);
        let obj = response.json();
        let id = obj['id'];

        this.setKey("user_id", id[0].id);
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  // Set Key For Specific Data
  public setKey(settingName, value){
    console.log("Saving Key For: " + settingName);
    console.log("Saving Value:" + value);
    return this.storage.set(settingName, value);
  }

  // Get Key From Saved Key
  public getKey(settingName){
    console.log("Getting Key For: " + settingName);
    this.storage.get(settingName).then((val) => {
      console.log("Value of get Key:" + val);
      this.keyVal = val;
      return val;
     });
  }






}
