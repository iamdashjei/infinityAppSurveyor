import { Component,  ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { NotificationPage } from '../notification/notification';
/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {
  @ViewChild(SignaturePad) public signaturePad : SignaturePad;

  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200
  }

  public signatureImage : string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  canvasResize() {
    let canvas = document.querySelector('canvas');
    this
      .signaturePad
      .set('minWidth', 1);
      console.log(canvas.offsetWidth);
    this
      .signaturePad
      .set('canvasWidth', canvas.offsetWidth);

    this
      .signaturePad
      .set('canvasHeight', canvas.offsetHeight);
  }


   ngAfterViewInit() {
     console.log("Reset Model Screen");
      this
      .signaturePad
      .clear();
      this.canvasResize();
   }




  drawCancel() {
    this.navCtrl.pop();

  }

   drawComplete() {
     this.signatureImage = this.signaturePad.toDataURL();
        this.navCtrl.push(NotificationPage, {signatureImage: this.signatureImage});
  }

  drawClear() {
    this
      .signaturePad
      .clear();
  }



}
