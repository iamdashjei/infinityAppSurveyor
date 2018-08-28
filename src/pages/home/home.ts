import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  rootPage = 'DashboardPage';


  constructor(public navCtrl: NavController) {
    this.pages = [
                 {title: 'Dashboard', component: 'DashboardPage'}
                ];
  }

  ionViewDidLoad(){
    console.log('Home Page Init Load');
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }

}
