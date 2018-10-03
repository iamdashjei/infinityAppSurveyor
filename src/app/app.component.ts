import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { SurveyorFormPage } from '../pages/surveyor-form/surveyor-form';

import { Subject } from 'rxjs';
import { AppState } from './app.global';

import firebase from 'firebase';
import { AngularFirestoreModule } from 'angularfire2/firestore';

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
              public toastCtrl: ToastController,
              public menuCtrl: MenuController,
              public afs: AngularFirestoreModule,
              public storage: Storage,
              public rest: RestProvider
          ) {

    const firebaseConfig = {
      apiKey: "AIzaSyAxzWpx6j3-CgyKb_6kfDqLhKSk5gkrLkk",
      authDomain: "infinityappv2.firebaseapp.com",
      databaseURL: "https://infinityappv2.firebaseio.com",
      projectId: "infinityappv2",
      storageBucket: "infinityappv2.appspot.com",
      messagingSenderId: "39340397583"
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

      this.presentNotif();
      location.reload();
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
          if(phone != null){
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
          } else{
            this.rootPage = 'LoginPage';
          }

      }, () => {
          this.rootPage = 'LoginPage';
        });

    });
  }


  presentNotif(){
    let toast = this.toastCtrl.create({
      message: 'You have New Lead assigned.',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


}
