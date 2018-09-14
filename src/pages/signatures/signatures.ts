import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController  } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';

/**
 * Generated class for the SignaturesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signatures',
  templateUrl: 'signatures.html',
})
export class SignaturesPage {
  public signatureImage : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
      this.signatureImage = navParams.get('signatureImage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturesPage');
  }

  // For Signature Drawpad
  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage);
    modal.present();
    }, 300);
  }

}
