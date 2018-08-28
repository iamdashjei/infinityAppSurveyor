import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { SurveyorFormPage } from '../surveyor-form/surveyor-form';
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

  // Signature Pad Options
  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200
  };

  public signatureImage : string;

  constructor(public navCtrl: NavController) {
  }


  // Canvas Resize
  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

   ngAfterViewInit() {
      this.signaturePad.clear();
      this.canvasResize();
   }

   // Signature Draw cancel
   drawCancel() {
     this.navCtrl.push(SurveyorFormPage);
   }

   // Signature Draw Complete
    drawComplete() {
     this.signatureImage = this.signaturePad.toDataURL();
     this.navCtrl.push(SurveyorFormPage, {signatureImage: this.signatureImage});
   }

   // Signature Draw Clear
   drawClear() {
     this.signaturePad.clear();
   }


}
