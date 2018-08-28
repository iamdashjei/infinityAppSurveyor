import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SignaturePage } from '../signature/signature';
/**
 * Generated class for the SurveyorFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-surveyor-form',
  templateUrl: 'surveyor-form.html',
})
export class SurveyorFormPage{
  public signatureImage: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalController: ModalController) {
    this.signatureImage = navParams.get('signatureImage');
  }

  // For Signature Drawpad
  openSignatureModel(){
    setTimeout(() => {
       let modal = this.modalController.create(SignaturePage);
    modal.present();
    }, 300);
  }

  // View Restriction for Forms. etc.
  isViewed(test: string){
    if(test === 'loft'){
      return true;
    }
  }



}
