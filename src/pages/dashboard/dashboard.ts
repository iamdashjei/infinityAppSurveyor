import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

    @ViewChild('doughnutCanvas') doughnutCanvas;

    doughnutChart: any;
    badgeNumber: number;
    leads: any;
    errorMessage: string;

    // Dashboard Custom Menu
    MENU = {
      DEFAULT: 'menu-components',
      MATERIAL: 'menu-material',
      AVATAR: 'menu-avatar',
      DARK: 'menu-dark',
      RIGHT: 'menu-right',
    };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
