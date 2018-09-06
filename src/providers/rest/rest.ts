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
  surveyorName: string;
  surveyorEmail: string;
  public headers = new Headers(
  {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
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

  fetchUserByPhoneNumber(phoneNumber, token){

    let data = JSON.stringify({
      phone: phoneNumber,
      device_token: token
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/get-userByPhoneNumber', data, this.options)
      .toPromise()
      .then((response) =>
      {
        //console.log('API Response : ', response.json());
        resolve(response);
        let obj = response.json();
        let id = obj['id'];

        this.setKey("user_id", id[0].id);
        this.setKey("user_name", id[0].name);
      })
      .catch((error) =>
      {
        console.error('API Error : ', error.status);
        console.error('API Error : ', JSON.stringify(error));
        reject(error.json());
      });
    });
  }

  updateLeadsFromActionBtn(lead_slug, id, status, remarks){
    let data = JSON.stringify({
      lead_slug: lead_slug,
      otp_user_id: id,
      status: status,
      remarks: remarks,
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/update-LeadsBySurveyor', data, this.options)
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

  updateLeadData(lead_slug, additional_fields, notes, postCode, addressInstall, nameOfCustomer){
    let data = JSON.stringify({
      lead_slug: lead_slug,
      additional_fields: ""+additional_fields,
      notes: notes,
      postCode: postCode,
      addressInstall: addressInstall,
      nameOfCustomer: nameOfCustomer
    });

    return new Promise((resolve, reject) => {
      this.http.post('https://app.infinityenergyorganisation.co.uk/v1/app/api/update-acceptLeadsBySurveyor', data, this.options)
      .toPromise()
      .then((response) =>
      {
        console.log('API Response for Lead Update: ', response.json());
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

  getSurveyorName(){
    console.log("getting surveyor name");
    return this.surveyorName;
  }

  getSurveyorEmail(){
    console.log("getting surveyor email");
    return this.surveyorEmail;
  }

  isCurrentUserActive(): boolean {
    if(this.surveyorName){
      return true;
    }
    return false;
  }






}
