import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { SurveyorFormPage } from '../pages/surveyor-form/surveyor-form';

import { Subject } from 'rxjs';
import { AppState } from './app.global';
import { FcmProvider } from '../providers/fcm/fcm';
import { tap } from 'rxjs/operators';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  // rootPage:any = 'LoginPage';
  rootPage:any = DashboardPage;

  activePage = new Subject();
  pages: Array<{ title: string, component: any, active: boolean, icon: string}>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public global: AppState,
              public menuCtrl: MenuController
            ) {

    const firebaseConfig = {
      apiKey: "AIzaSyC6m-aOof-E-s1AyM0GfgJARfaLHYECRDI",
      authDomain: "infinityapp-fe5c6.firebaseapp.com",
      databaseURL: "https://infinityapp-fe5c6.firebaseio.com",
      projectId: "infinityapp-fe5c6",
      storageBucket: "infinityapp-fe5c6.appspot.com",
      messagingSenderId: "918580267251"
    };
    firebase.initializeApp(firebaseConfig);
    platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.menuCtrl.enable(false, 'right');

    });

    this.rightMenuItems = [
      { icon: 'home', active: true },
      { icon: 'alarm', active: false },
      { icon: 'analytics', active: false },
      { icon: 'archive', active: false },
      { icon: 'basket', active: false },
      { icon: 'body', active: false },
      { icon: 'bookmarks', active: false },
      { icon: 'camera', active: false },
      { icon: 'beer', active: false },
      { icon: 'power', active: false },
    ];

    this.pages = [
      { title: 'Dashboard', component: DashboardPage, active: true, icon: 'home'},
      { title: 'Entry Forms', component: SurveyorFormPage, active: false, icon: 'archive'},
      { title: 'Settings', component: DashboardPage, active: false, icon: 'map' },
    ];

    this.activePage.subscribe((selectedPage: any) => {
        this.pages.map(page => {
          page.active = page.title === selectedPage.title;
      });
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}
