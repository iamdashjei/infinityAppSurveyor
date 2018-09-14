import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController  } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  public signatureImage : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
    this.signatureImage = navParams.get('signatureImage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  // For Signature Drawpad
  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage);
    modal.present();
    }, 300);
  }



}
