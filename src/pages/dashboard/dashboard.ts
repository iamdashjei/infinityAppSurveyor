import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { RestProvider } from '../../providers/rest/rest';
import { DatasourceProvider } from '../../providers/datasource/datasource';
import { Badge } from '@ionic-native/badge';

import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

    @ViewChild('doughnutCanvas') doughnutCanvas;

    doughnutChart: any;
    badgeNumber: number;
    leads: any;
    errorMessage: string;
    codes: any;



    // Dashboard Custom Menu
    MENU = {
      DEFAULT: 'menu-components',
      MATERIAL: 'menu-material',
      AVATAR: 'menu-avatar',
      DARK: 'menu-dark',
      RIGHT: 'menu-right',
    };

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              private badge: Badge,
              public http: Http,
              public rest: RestProvider,
              public datasource: DatasourceProvider) {
      this.menuCtrl.enable(true, 'menu-material');

  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

          type: 'doughnut',
          data: {
              labels: ["In Progress", "Completed", "Added Leads"],
              datasets: [{
                  label: '# of Leads',
                  data: [12, 19, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)'
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
          }

      });

      this.getOtpCodesList();
  }

  saveOtpCode(){
    let otp_code = '5522312';
    let otp_date = '2018-08-31';
    let otp_user_id = '1';
    let data = {'otp_code': otp_code, 'otp_date': otp_date, 'otp_user_id': otp_user_id} ;

    // this.rest.createOtpCodes().then((result) => {
    //   console.log(result);
    //
    // }, (err) => {
    //   console.log(err);
    //
    // });
    alert(JSON.stringify(data));
  }

  testThisPost(){
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

    alert(data);
    // return new Promise((resolve, reject) => {
    //   this.http.post('https://app.infinityenergyorganisation.co.uk/app/api/add-otpcodes', data, options)
    //   .toPromise()
    //   .then((response) =>
    //   {
    //     console.log('API Response : ', response.json());
    //     resolve(response.json());
    //   })
    //   .catch((error) =>
    //   {
    //     console.error('API Error : ', error.status);
    //     console.error('API Error : ', JSON.stringify(error));
    //     reject(error.json());
    //   });
    // });
  }

  // createItem(newItem){
  //   let i = { 'otp_code': newItem.value, 'otp_date' : '2018-08-31', 'otp_user_id' : '1'};
  //   this.rest.create(i);
  // }

  getOtpCodesList(){
    this.rest.getOtpCodes().then(data => {
      this.codes = data;
      console.log(this.codes);
    });
  }

  // Set Badge Count
  setBadges(badgeNumber: number) {
    console.log("Set Badges " + badgeNumber);
    this.badge.set(badgeNumber);
  }

  // Get Badge Count
  getBadges() {
    this.badge.get();
  }

  // Increase Badge Count
  increaseBadges(badgeNumber: number) {
      this.badge.increase(badgeNumber);
  }

  // Clear Badges
  clearBadges(){
    this.badge.clear();
  }
}
