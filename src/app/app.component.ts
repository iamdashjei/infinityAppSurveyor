import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Storage } from '@ionic/storage';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { SurveyorFormPage } from '../pages/surveyor-form/surveyor-form';
import { NotificationPage } from '../pages/notification/notification';
import { SurveyorPage } from '../pages/surveyor/surveyor';
import { SignaturePage } from '../pages/signature/signature';

import { Subject } from 'rxjs';
import { AppState } from './app.global';
import { tap } from 'rxjs/operators';

import firebase from 'firebase';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { RestProvider } from '../providers/rest/rest';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
   rootPage:any;


  activePage = new Subject();
  pages: Array<{ title: string, component: any, active: boolean, icon: string}>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;
  user_name: string;
  token: any;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public global: AppState,
              public menuCtrl: MenuController,
              public afs: AngularFirestoreModule,
              public storage: Storage,
              public rest: RestProvider
          ) {

    const firebaseConfig = {
          apiKey: "AIzaSyC6m-aOof-E-s1AyM0GfgJARfaLHYECRDI",
          authDomain: "infinityapp-fe5c6.firebaseapp.com",
          databaseURL: "https://infinityapp-fe5c6.firebaseio.com",
          projectId: "infinityapp-fe5c6",
          storageBucket: "infinityapp-fe5c6.appspot.com",
          messagingSenderId: "918580267251"
    };
    this.isLoggedIn();
    firebase.initializeApp(firebaseConfig);
    FCMPlugin.getToken(
      (token) => {
        console.log("Device Token: " + token);
        this.token = token;
    });

    FCMPlugin.onNotification(function(data){
    if(data.wasTapped){
      this.isLoggedIn();
      //Notification was received on device tray and tapped by the user.
    //  navCtrl.setRoot(DashboardPage);
    }else{
      //Notification was received in foreground. Maybe the user needs to be notified.
      alert( JSON.stringify(data) );
      this.isLoggedIn();
      }
    });



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

  isLoggedIn(){

    this.storage.ready().then(() => {

      this.storage.get('SurveyorPhone').then((phone) => {
          this.rest.fetchUserByPhoneNumber(phone, this.token).then((result) => {
                  console.log(result);
                  //this.rootPage = NotificationPage;
                  //this.rootPage = SurveyorPage;
                  this.rootPage = DashboardPage;
                  //this.navCtrl.setRoot(DashboardPage);
          }, (err) => {
                  console.log(err);
                  this.rootPage = 'LoginPage';
            });

      }, (err) => {
        this.rootPage = 'LoginPage';
      });

    });
  }





}
