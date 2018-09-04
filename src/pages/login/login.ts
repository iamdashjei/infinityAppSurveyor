import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import firebase from 'firebase';

import { DashboardPage } from '../dashboard/dashboard';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public recaptchaVerifier:firebase.auth.RecaptchaVerifier; // For captcha verification
  public email: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public rest: RestProvider) {
  }

  ionViewDidLoad() {
     this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  login(phoneNumber: number) {
    let phoneNumberTest = '639051583899';
      this.rest.fetchUserByPhoneNumber(phoneNumberTest).then((result) => {
        console.log(result);
        this.openDashboard();
      }, (err) => {
        console.log(err);

      });

    // const appVerifier = this.recaptchaVerifier;
    // const phoneNumberString = "+" + phoneNumber;
    // firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    //   .then( confirmationResult => {
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     let prompt = this.alertCtrl.create({
    //     title: 'Enter the Confirmation code',
    //     inputs: [{ name: 'confirmationCode', placeholder: 'Confirmation Code' }],
    //     buttons: [
    //       { text: 'Cancel',
    //         handler: data => { console.log('Cancel clicked'); }
    //       },
    //       { text: 'Send',
    //         handler: data => {
    //           confirmationResult.confirm(data.confirmationCode)
    //           .then(function (result) {
    //             // User signed in successfully.
    //             console.log(result.user);
    //
    //             alert("Signed In Successfully");
    //             this.openDashboard();
    //             // ...
    //           }).catch(function (error) {
    //             // User couldn't sign in (bad verification code?)
    //             // ...
    //           });
    //         }
    //       }
    //     ]
    //   });
    //   prompt.present();
    // })
    // .catch(function (error) {
    //   console.error("SMS not sent", error);
    // });
  }

  openDashboard(){
    this.navCtrl.setRoot(DashboardPage);
  }

}
