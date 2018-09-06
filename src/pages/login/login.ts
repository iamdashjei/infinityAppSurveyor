import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import firebase from 'firebase';

import { RestProvider } from '../../providers/rest/rest';

import { DashboardPage } from '../dashboard/dashboard';

import { Storage } from '@ionic/storage';
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
  //public recaptchaVerifier:firebase.auth.RecaptchaVerifier; // For captcha verification
  public email: any;


  verificationId:any;
  code: string = "";
  phoneNumber: string;
  verifiedPhoneNumber: string;
  token: string = "";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public rest: RestProvider, public storage: Storage) {
    // FCMPlugin.subscribeToTopic('all');

  }


  ionViewDidLoad() {
    // this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    // FCMPlugin.getToken(
    //   (token) => {
    //     console.log("Device Token: " + token);
    //     this.token = token;
    // });
  }

  login(phoneNumber: number) {



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
    //             //  console.log(result.user);
    //
    //
    //             // this.rest.fetchUserByPhoneNumber(phoneNumber).then((result) => {
    //             //   console.log(result);
    //             //   this.openDashboard();
    //             // }, (err) => {
    //             //   console.log(err);
    //             //
    //             // });
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



  send(phoneNumber: number){

    // let testNumber = '639051583899';
    // this.rest.fetchUserByPhoneNumber(testNumber, this.token).then((result) => {
    //         console.log(result);
    //         this.navCtrl.setRoot(DashboardPage);
    // }, (err) => {
    //         console.log(err);
    //
    //   });
    // const phoneNumberString = "+" + phoneNumber;
    // (<any>window).FirebasePlugin.verifyPhoneNumber(phoneNumberString, 60, (credential) => {
    //   alert("SMS Sent Successfully");
    //   console.log(credential);
    //
    //   this.verificationId = credential.verificationId;
    //
    // }, (error) => {
    //   console.error(error);
    // });

    this.rest.fetchTestUserPhone(this.phoneNumber, this.token).then((result) => {
            console.log(result);
          //  this.navCtrl.setRoot(DashboardPage);
    }, (err) => {
            console.log(err);

      });
  
  }

  PhoneVerification(){
    // let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);
    //
    // firebase.auth().signInWithCredential(signInCredential).then((info) => {
    //   console.log(info);
    //
    //   this.rest.fetchUserByPhoneNumber(this.phoneNumber, this.token).then((result) => {
    //           console.log(result);
    //           this.navCtrl.setRoot(DashboardPage);
    //   }, (err) => {
    //           console.log(err);
    //
    //     });
    //   this.navCtrl.setRoot(DashboardPage);
    //
    // }, (error) => {
    //   console.log(error);
    // });
  }

  isPhoneNumberSubmit(){
    if(this.verificationId){
      return false;
    }
    return true;
  }

  isCodeVerified(){
    if(this.verificationId){
      return true;
    }
    return false;
  }





}
