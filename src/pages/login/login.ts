import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
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
declare var cordova: any;

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


  regData = { avatar: ''};
  imgPreview = 'assets/imgs/avatar/marty-avatar.png';

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public rest: RestProvider,
              public storage: Storage
            ){
    // FCMPlugin.subscribeToTopic('all');

  }


  ionViewDidLoad() {
    FCMPlugin.getToken(
      (token) => {
        console.log("Device Token: " + token);
        this.token = token;
    });
    // this.storage.ready().then(() => {
    //
    //   this.storage.get('SurveyorPhone').then((phone) => {
    //       this.rest.fetchUserByPhoneNumber(phone, this.token).then((result) => {
    //               console.log(result);
    //               this.navCtrl.setRoot(DashboardPage);
    //       }, (err) => {
    //               console.log(err);
    //
    //         });
    //
    //   });
    //
    // });

  }

  send(phoneNumber: number){



     const phoneNumberString = "+" + phoneNumber;
    (<any>window).FirebasePlugin.verifyPhoneNumber(phoneNumberString, 60, (credential) => {
      alert("SMS Sent Successfully");
      console.log(credential);

      this.verificationId = credential.verificationId;

    }, (error) => {
      console.error(error);
    });


  }


  PhoneVerification(){
    let signInCredential = firebase.auth.PhoneAuthProvider.credential(this.verificationId, this.code);

    firebase.auth().signInWithCredential(signInCredential).then((info) => {
      console.log(info);
      this.storage.set("otp_code", this.code);
      this.storage.set("SurveyorPhone", this.phoneNumber);
      this.rest.fetchUserByPhoneNumber(this.phoneNumber, this.token).then((result) => {
              console.log(result);


              this.navCtrl.setRoot(DashboardPage);
      }, (err) => {
              console.log(err);

        });

    }, (error) => {
      console.log(error);

    });
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
